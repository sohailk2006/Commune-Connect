"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getUpcomingEvents } from "@/lib/data"
import type { EventType } from "@/lib/types"

export function UpcomingEvents() {
  const [events, setEvents] = useState<EventType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const upcomingEvents = await getUpcomingEvents()
        setEvents(upcomingEvents)
      } catch (error) {
        console.error("Failed to load upcoming events:", error)
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  if (loading) {
    return (
      <section className="container py-8">
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Upcoming Events</h2>
          <p className="text-muted-foreground">Discover events happening soon in your community</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <div className="h-40 bg-muted rounded-t-lg" />
              <CardHeader className="p-4">
                <div className="h-5 bg-muted rounded w-3/4 mb-2" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="container py-8">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Upcoming Events</h2>
            <p className="text-muted-foreground">Discover events happening soon in your community</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden flex flex-col">
            <div className="relative h-40">
              <Image
                src={event.image || "/placeholder.svg?height=160&width=320"}
                alt={event.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary">{event.category}</Badge>
              </div>
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg line-clamp-1">{event.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(event.date).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                <span className="line-clamp-1">{event.location}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 mt-auto">
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={`/events/${event.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
