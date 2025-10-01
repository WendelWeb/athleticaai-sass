"use client";

export default function DebugEnvPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">
        Debug Variables d&apos;Environnement
      </h1>

      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-bold">Supabase URL:</h2>
          <p className="font-mono text-sm break-all">
            {supabaseUrl || "❌ NON DÉFINIE"}
          </p>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-bold">Supabase Anon Key:</h2>
          <p className="font-mono text-sm break-all">
            {supabaseKey
              ? `✅ ${supabaseKey.substring(0, 20)}...`
              : "❌ NON DÉFINIE"}
          </p>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-bold">Clerk Publishable Key:</h2>
          <p className="font-mono text-sm break-all">
            {clerkKey ? `✅ ${clerkKey.substring(0, 20)}...` : "❌ NON DÉFINIE"}
          </p>
        </div>

        <div className="p-4 border rounded bg-yellow-50">
          <h2 className="font-bold">Instructions:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Toutes les variables doivent être définies</li>
            <li>Si elles ne le sont pas, vérifiez votre fichier .env.local</li>
            <li>Redémarrez complètement votre serveur après modification</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
