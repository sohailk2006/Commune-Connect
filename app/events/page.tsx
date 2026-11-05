import { Suspense } from "react"
import { EventsFilter } from "@/components/events-filter"
import { EventsList } from "@/components/events-list"
import { EventsLoading } from "@/components/events-loading"

export const metadata = {
  title: "Events | Commune Connect",
  description: "Browse and discover community events near you",
}

export default function EventsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Events</h1>
        <p className="text-muted-foreground">Browse and discover community events near you</p>
      </div>
      <EventsFilter />
      <Suspense fallback={<EventsLoading />}>
        <EventsList />
      </Suspense>
    </div>
  )
}
