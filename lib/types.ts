export type EventType = {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  image?: string
  organizer: string
  attendees: number
  price?: number
  tags?: string[]
}

export type UserType = {
  id: string
  name: string
  email: string
  image?: string
  bio?: string
  events?: string[]
  communities?: string[]
}

export type CommunityType = {
  id: string
  name: string
  description: string
  image?: string
  members: number
  events: string[]
  category: string
}
