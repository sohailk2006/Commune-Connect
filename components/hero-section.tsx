import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="Community events"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 container flex flex-col items-center justify-center text-center py-24 md:py-32 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
          Connect with Your Community
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Discover local events, meet new people, and build a stronger community with Commune Connect
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="/events">Find Events</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/create-event">Host an Event</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
