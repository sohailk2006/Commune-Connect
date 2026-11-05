"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { EventType } from "@/lib/types"
import { useState } from "react"
import { registerForEvent } from "@/lib/actions"

interface EventRegistrationFormProps {
  event: EventType
}

export function EventRegistrationForm({ event }: EventRegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      await registerForEvent(formData)
      setIsSuccess(true)
    } catch (error) {
      console.error("Failed to register:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Registration Successful!</CardTitle>
          <CardDescription>You have successfully registered for this event.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            We've sent a confirmation email with all the details. Looking forward to seeing you there!
          </p>
          <Button className="w-full" variant="outline">
            Add to Calendar
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register for this Event</CardTitle>
        <CardDescription>Fill out the form below to register for {event.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <input type="hidden" name="eventId" value={event.id} />
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="specialRequirements">Special Requirements</Label>
            <Textarea
              id="specialRequirements"
              name="specialRequirements"
              placeholder="Any dietary restrictions, accessibility needs, etc."
            />
          </div>
          <div>
            {event.price ? (
              <p className="text-sm font-medium">Price: ${event.price.toFixed(2)}</p>
            ) : (
              <p className="text-sm font-medium text-green-600 dark:text-green-400">Free Event</p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register Now"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start text-sm text-muted-foreground">
        <p>By registering, you agree to our Terms of Service and Privacy Policy.</p>
      </CardFooter>
    </Card>
  )
}
