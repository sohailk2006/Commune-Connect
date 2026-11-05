import { SignupForm } from "@/components/signup-form"

export const metadata = {
  title: "Sign Up | Commune Connect",
  description: "Create a new Commune Connect account",
}

export default function SignupPage() {
  return (
    <div className="container flex items-center justify-center min-h-[80vh] py-12">
      <div className="mx-auto max-w-md w-full">
        <SignupForm />
      </div>
    </div>
  )
}
