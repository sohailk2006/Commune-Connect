import { LoginForm } from "@/components/login-form"

export const metadata = {
  title: "Login | Commune Connect",
  description: "Log in to your Commune Connect account",
}

export default function LoginPage() {
  return (
    <div className="container flex items-center justify-center min-h-[80vh] py-12">
      <div className="mx-auto max-w-md w-full">
        <LoginForm />
      </div>
    </div>
  )
}
