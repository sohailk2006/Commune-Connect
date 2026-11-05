import type { EventType, UserType, CommunityType } from "./types"

// Mock data for development
const events: EventType[] = [
  {
    id: "1",
    title: "Community Cleanup Day",
    description:
      "Join us for a day of cleaning up our local parks and streets. Bring gloves and wear comfortable clothes.",
    date: "2025-05-15",
    time: "9:00 AM - 12:00 PM",
    location: "Central Park, Main Entrance",
    category: "Community Service",
    image: "/placeholder.svg?height=200&width=400",
    organizer: "Green Earth Initiative",
    attendees: 45,
    tags: ["environment", "volunteer", "community"],
  },
  {
    id: "2",
    title: "Tech Meetup: Web Development Trends 2025",
    description:
      "Discuss the latest trends in web development with industry experts. Networking opportunities available.",
    date: "2025-05-20",
    time: "6:30 PM - 9:00 PM",
    location: "Innovation Hub, 123 Tech Street",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=400",
    organizer: "Tech Enthusiasts Group",
    attendees: 120,
    tags: ["technology", "web development", "networking"],
  },
  {
    id: "3",
    title: "Farmers Market",
    description: "Local farmers and artisans selling fresh produce, handmade crafts, and delicious food.",
    date: "2025-05-22",
    time: "8:00 AM - 1:00 PM",
    location: "Downtown Square",
    category: "Food & Drink",
    image: "/placeholder.svg?height=200&width=400",
    organizer: "Local Farmers Association",
    attendees: 350,
    tags: ["food", "shopping", "local"],
  },
  {
    id: "4",
    title: "Yoga in the Park",
    description: "Free yoga session for all levels. Bring your own mat and water bottle.",
    date: "2025-05-25",
    time: "7:00 AM - 8:00 AM",
    location: "Riverside Park, Yoga Lawn",
    category: "Sports & Fitness",
    image: "/placeholder.svg?height=200&width=400",
    organizer: "Mindful Movement Studio",
    attendees: 30,
    price: 0,
    tags: ["fitness", "wellness", "outdoors"],
  },
  {
    id: "5",
    title: "Art Exhibition: Local Talents",
    description: "Showcasing artwork from local artists. Refreshments will be served.",
    date: "2025-06-01",
    time: "5:00 PM - 8:00 PM",
    location: "Community Art Gallery, 456 Culture Ave",
    category: "Arts & Culture",
    image: "/placeholder.svg?height=200&width=400",
    organizer: "Arts Council",
    attendees: 75,
    tags: ["art", "culture", "exhibition"],
  },
  {
    id: "6",
    title: "Coding Workshop for Beginners",
    description: "Learn the basics of coding in this hands-on workshop. No prior experience required.",
    date: "2025-06-05",
    time: "10:00 AM - 3:00 PM",
    location: "Public Library, Computer Lab",
    category: "Education",
    image: "/placeholder.svg?height=200&width=400",
    organizer: "Code for All",
    attendees: 25,
    price: 15,
    tags: ["education", "coding", "workshop"],
  },
]

const users: UserType[] = [
  {
    id: "1",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Community organizer passionate about environmental issues.",
    events: ["1", "3"],
    communities: ["1", "3"],
  },
  {
    id: "2",
    name: "John Doe",
    email: "john.doe@example.com",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Tech enthusiast and volunteer.",
    events: ["2", "6"],
    communities: ["2"],
  },
]

const communities: CommunityType[] = [
  {
    id: "1",
    name: "Green Earth Initiative",
    description: "Dedicated to environmental conservation and sustainability.",
    image: "/placeholder.svg?height=200&width=400",
    members: 120,
    events: ["1"],
    category: "Environment",
  },
  {
    id: "2",
    name: "Tech Enthusiasts Group",
    description: "For those passionate about technology and innovation.",
    image: "/placeholder.svg?height=200&width=400",
    members: 250,
    events: ["2", "6"],
    category: "Technology",
  },
  {
    id: "3",
    name: "Local Farmers Association",
    description: "Supporting local agriculture and sustainable farming practices.",
    image: "/placeholder.svg?height=200&width=400",
    members: 85,
    events: ["3"],
    category: "Agriculture",
  },
]

// Simulated API functions
export async function getFeaturedEvents(): Promise<EventType[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return events.slice(0, 3)
}

export async function getUpcomingEvents(): Promise<EventType[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return events.slice(0, 4)
}

export async function getAllEvents(): Promise<EventType[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return events
}

export async function getEventById(id: string): Promise<EventType | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return events.find((event) => event.id === id)
}

export async function getUserById(id: string): Promise<UserType | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return users.find((user) => user.id === id)
}

export async function getCommunities(): Promise<CommunityType[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return communities
}

export async function getCommunityById(id: string): Promise<CommunityType | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return communities.find((community) => community.id === id)
}
