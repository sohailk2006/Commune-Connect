import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Users } from "lucide-react"
import Link from "next/link"
import FeaturedEvents from "@/components/featured-events"
import { HeroSection } from "@/components/hero-section"
import { CommunityStats } from "@/components/community-stats"
import { UpcomingEvents } from "@/components/upcoming-events"

export default async function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      <HeroSection />
      <CommunityStats />
      <section className="container py-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Featured Events</h2>
          <p className="text-muted-foreground">Discover the most popular events in your community</p>
        </div>
        <FeaturedEvents />
      </section>
      <section className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col gap-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Commune Connect makes it easy to discover, create, and join community events
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-4 p-6 bg-background rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Discover Events</h3>
              <p className="text-muted-foreground">
                Find events happening in your community based on your interests and location
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-6 bg-background rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full">
                <CalendarDays className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Create Events</h3>
              <p className="text-muted-foreground">Organize and manage your own events with our easy-to-use tools</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-6 bg-background rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Connect with Others</h3>
              <p className="text-muted-foreground">
                Meet like-minded people and build meaningful connections in your community
              </p>
            </div>
          </div>
        </div>
      </section>
      <UpcomingEvents />
      <section className="container py-12">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2>
          <p className="text-muted-foreground">
            Join Commune Connect today and start discovering events in your community or create your own!
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/events">Browse Events</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/create-event">Create Event</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
