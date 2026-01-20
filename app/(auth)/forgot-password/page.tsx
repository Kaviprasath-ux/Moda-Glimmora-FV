"use client"

import * as React from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft, Loader2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { forgotPasswordSchema, type ForgotPasswordInput } from "@/lib/utils/validators"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [submittedEmail, setSubmittedEmail] = React.useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = async (data: ForgotPasswordInput) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setSubmittedEmail(data.email)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-6">
          <Mail className="h-8 w-8 text-success" />
        </div>
        <h1 className="font-display text-3xl font-semibold mb-2">Check your email</h1>
        <p className="text-muted-foreground mb-8">
          We&apos;ve sent password reset instructions to{" "}
          <span className="font-medium text-foreground">{submittedEmail}</span>
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Didn&apos;t receive the email? Check your spam folder or{" "}
          <button
            onClick={() => setIsSubmitted(false)}
            className="font-medium text-foreground hover:underline"
          >
            try again
          </button>
        </p>
        <Button variant="outline" asChild>
          <Link href="/login">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to sign in
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      <Link
        href="/login"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to sign in
      </Link>

      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold mb-2">Reset your password</h1>
        <p className="text-muted-foreground">
          Enter your email and we&apos;ll send you instructions to reset your password
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send reset instructions"
          )}
        </Button>
      </form>
    </div>
  )
}
