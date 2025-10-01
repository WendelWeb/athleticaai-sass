import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { Webhook } from "svix";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with service role key for admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

type ClerkWebhookEvent = {
  type: string;
  data: {
    id: string;
    email_addresses: Array<{
      email_address: string;
      id: string;
    }>;
    first_name: string | null;
    last_name: string | null;
    image_url: string | null;
    created_at: number;
    updated_at: number;
  };
};

export async function POST(req: NextRequest) {
  // Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.text();

  // Create a new Svix instance with your secret.
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let evt: ClerkWebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as ClerkWebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Handle the webhook
  const eventType = evt.type;
  console.log(`Webhook received: ${eventType}`);

  try {
    switch (eventType) {
      case "user.created":
        await handleUserCreated(evt.data);
        break;
      case "user.updated":
        await handleUserUpdated(evt.data);
        break;
      case "user.deleted":
        await handleUserDeleted(evt.data);
        break;
      default:
        console.log(`Unhandled webhook event: ${eventType}`);
    }
  } catch (error) {
    console.error(`Error handling webhook ${eventType}:`, error);
    return new Response("Error processing webhook", { status: 500 });
  }

  return new Response("Webhook processed successfully", { status: 200 });
}

async function handleUserCreated(userData: ClerkWebhookEvent["data"]) {
  console.log("Creating user in Supabase:", userData.id);

  const primaryEmail = userData.email_addresses.find(
    (email) => email.email_address
  )?.email_address;

  if (!primaryEmail) {
    throw new Error("No email found for user");
  }

  const { data, error } = await supabase
    .from("users")
    .insert({
      clerk_id: userData.id,
      email: primaryEmail,
      first_name: userData.first_name,
      last_name: userData.last_name,
      avatar_url: userData.image_url,
      created_at: new Date(userData.created_at).toISOString(),
      updated_at: new Date(userData.updated_at).toISOString(),
    })
    .select();

  if (error) {
    console.error("Error creating user in Supabase:", error);
    throw error;
  }

  console.log("User created successfully in Supabase:", data);
}

async function handleUserUpdated(userData: ClerkWebhookEvent["data"]) {
  console.log("Updating user in Supabase:", userData.id);

  const primaryEmail = userData.email_addresses.find(
    (email) => email.email_address
  )?.email_address;

  if (!primaryEmail) {
    throw new Error("No email found for user");
  }

  const { data, error } = await supabase
    .from("users")
    .update({
      email: primaryEmail,
      first_name: userData.first_name,
      last_name: userData.last_name,
      avatar_url: userData.image_url,
      updated_at: new Date(userData.updated_at).toISOString(),
    })
    .eq("clerk_id", userData.id)
    .select();

  if (error) {
    console.error("Error updating user in Supabase:", error);
    throw error;
  }

  console.log("User updated successfully in Supabase:", data);
}

async function handleUserDeleted(userData: ClerkWebhookEvent["data"]) {
  console.log("Deleting user from Supabase:", userData.id);

  const { error } = await supabase
    .from("users")
    .delete()
    .eq("clerk_id", userData.id);

  if (error) {
    console.error("Error deleting user from Supabase:", error);
    throw error;
  }

  console.log("User deleted successfully from Supabase");
}
