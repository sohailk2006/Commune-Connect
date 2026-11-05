# Commune Connect

Commune Connect is a community-events prototype built with Next.js. It brings together local event discovery, event details and registration, and an event creation flow.

## Features

- Home page with featured and upcoming community events
- Event listing and event detail pages
- Event registration and event creation forms
- Sign-in and sign-up screens
- Responsive navigation and light/dark theme support
- A demo events API at `/api/events`

The events page includes search, category, date, and location controls; connecting those controls to the event results is still future work.

## Getting started

This project uses pnpm. Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [[http://localhost:3000](http://localhost:3000](https://v0-commune-connect-website-git-main-ccdts-projects.vercel.app)) to view the app.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Next.js development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Community landing page and featured events |
| `/events` | Browse the event listings |
| `/events/[id]` | View an event and its registration form |
| `/create-event` | Open the event creation form |
| `/login` | Sign-in screen |
| `/signup` | Sign-up screen |
| `/api/events` | Demo endpoint for listing and creating events |
| `/api/auth/[...nextauth]` | NextAuth.js handler |

## Project structure

```text
app/          App Router pages and API routes
components/   Page sections, forms, and UI components
lib/          Event data, server actions, types, and utilities
public/       Static assets
```

## Tech stack

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS and shadcn/ui components
- NextAuth.js for the authentication route
- Lucide icons

## Demo implementation notes

This repository is currently a prototype, not a production-ready event service:

- `lib/data.ts` contains in-memory sample events, users, and communities. The data is not persisted.
- `lib/actions.ts` simulates event creation and registration. It logs submitted details on the server, but does not save records or send email.
- `POST /api/events` returns a sample response rather than storing an event.
- The credentials sign-in provider currently accepts any non-empty email and password. Google and Facebook sign-in require real provider credentials. Replace the demo authentication and add production secrets and validation before deployment.
- Event images and some event detail copy are placeholders.

Before using this app with real users, connect persistent storage, validate submissions on the server, implement real authentication, and configure any required OAuth providers.
