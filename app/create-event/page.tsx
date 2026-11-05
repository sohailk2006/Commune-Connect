import { CreateEventForm } from "@/components/create-event-form"

export const metadata = {
  title: "Create Event | Commune Connect",
  description: "Create a new community event",
}

export default function CreateEventPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Create an Event</h1>
        <p className="text-muted-foreground">Fill out the form below to create a new community event</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <CreateEventForm />
      </div>
    </div>
  )
}
