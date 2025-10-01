import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bon retour !
          </h1>
          <p className="text-muted-foreground">
            Connecte-toi pour continuer ta transformation
          </p>
        </div>
        
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white",
              card: "bg-card border border-border shadow-lg",
              headerTitle: "text-foreground",
              headerSubtitle: "text-muted-foreground",
              socialButtonsBlockButton: "border border-border hover:bg-accent",
              formFieldLabel: "text-foreground",
              formFieldInput: "border border-border bg-background text-foreground",
              footerActionLink: "text-primary hover:text-primary/80"
            }
          }}
        />
      </div>
    </div>
  )
}
