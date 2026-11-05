import { NextResponse } from "next/server"
import { getAllEvents, getEventById } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const event = await getEventById(id)

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    return NextResponse.json(event)
  }

  const events = await getAllEvents()
  return NextResponse.json(events)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real application, you would:
    // 1. Validate the request body
    // 2. Save the event to your database
    // 3. Return the created event

    // For now, we'll just return a mock response
    return NextResponse.json(
      {
        id: "new-event-id",
        ...body,
        createdAt: new Date().toISOString(),
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Failed to create event" }, { status: 400 })
  }
}
