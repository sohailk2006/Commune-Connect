import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Share, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getEventById } from "@/lib/data"
import { notFound } from "next/navigation"
import { EventRegistrationForm } from "@/components/event-registration-form"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const event = await getEventById(params.id)

  if (!event) {
    return {
      title: "Event Not Found | Commune Connect",
      description: "The event you're looking for doesn't exist or has been removed.",
    }
  }

  return {
    title: `${event.title} | Commune Connect`,
    description: event.description,
  }
}

export default async function EventPage({ params }: { params: { id: string } }) {
  const event = await getEventById(params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video w-full mb-6">
            <Image
              src={event.image || "/placeholder.svg?height=400&width=800"}
              alt={event.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge>{event.category}</Badge>
            {event.tags?.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">{event.title}</h1>
          <div className="grid gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span>
                {new Date(event.date).toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>{event.attendees} people attending</span>
            </div>
          </div>
          <div className="prose max-w-none dark:prose-invert">
            <h2>About this event</h2>
            <p>{event.description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <h2>What to expect</h2>
            <ul>
              <li>Interactive sessions with experienced facilitators</li>
              <li>Networking opportunities with like-minded individuals</li>
              <li>Refreshments and snacks will be provided</li>
              <li>Take-home resources and materials</li>
            </ul>
            <h2>Organizer</h2>
            <p>
              This event is organized by <strong>{event.organizer}</strong>. For any questions or inquiries, please
              contact the organizer directly.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <Button asChild variant="outline">
              <Link href="/events">Back to Events</Link>
            </Button>
            <Button className="gap-2">
              <Share className="h-4 w-4" />
              Share Event
            </Button>
          </div>
        </div>
        <div>
          <div className="sticky top-24">
            <EventRegistrationForm event={event} />
          </div>
        </div>
      </div>
    </div>
  )
}
