# Wistaway Mini – Frontend

## Overview

This repository contains the frontend application for **Wistaway Mini**, a discovery-first travel platform centered on identity-driven playlists and intent-based exploration.

The frontend demonstrates:

- JWT authentication
- Structured route-based background system
- Consistent surface and layout design system
- Conditional rendering patterns (empty vs populated states)
- A complete vertical slice from login → playlist hub → playlist detail → link creation

The implementation prioritizes architectural clarity and UI system consistency over feature completeness.

---

## Tech Stack

- React
- Vite
- React Router
- JavaScript (ES Modules)
- CSS (custom design system)
- Netlify (deployment target)

---

## Routing Structure

Defined in `App.jsx`.

### Core Routes

- `/` – Homepage (graphic CTA tiles)
- `/browse` – Browse input form
- `/browse/results` – Browse results shell
- `/booking` – Booking input form
- `/booking/results` – Booking results shell
- `/quiz` – Quiz step flow
- `/quiz/results` – Quiz results
- `/travel-style` – Travel style page
- `/playlists` – Playlist Hub
- `/playlists/:playlistId` – Playlist Detail
- `/login`
- `/register`

Background mode is determined centrally via a route → background mapping function inside `App.jsx`.

---

## Background & Surface System

The frontend implements a locked surface schema with three modes:

### 1. Plain Background

`#F9FAFB`

Used for:

- Home
- Results pages
- Playlists
- Playlist Detail

### 2. Contextual Image Background

Softened image with overlay.

Used for:

- Browse (input)
- Booking (input)
- Quiz suite (Quiz, Results, Travel Style)

### 3. Beach Atmospheric Background

Softened beach image with blur overlay.

Used for:

- Login
- Register
- NotFound

### Global Rules

- Only one background mode per page.
- No photo background + photo tiles on the same page.
- Cards use muted gray (`#F9FAFB`), never pure white.
- Sticky navigation across all pages.
- No internal card scroll.

All surface logic lives in `src/styles/design-system.css`.

---

## Design System

Custom CSS-based design system including:

### Typography

- Inter font
- Locked size/weight scale
- Home headline emphasis
- Graphic tile typography overrides

### Layout Helpers

- `.container`
- `.stack`
- `.grid`
- `.page-stage`
- `.task-page`

### Surface Variants

- `.card`
- `.card--hero`
- `.card--primary`
- `.card--task`

### Background Mode Classes

- `.app-shell--plain`
- `.app-shell--context-browse`
- `.app-shell--context-book`
- `.app-shell--context-quiz`
- `.app-shell--beach`

### Graphic Tile Utilities

Overrides global anchor hover color when tiles are image-based.

---

## Core Pages

### Homepage (`/`)

- Plain background
- Three photographic CTA tiles
- No enclosing card
- Strong typographic hierarchy
- Slightly taller soft-rectangle tiles

---

### Playlist Hub (`/playlists`)

Header:

- Title + subtitle
- Primary CTA (“Create a playlist”) always visible

Conditional rendering:

#### Empty State

- 3 action tiles (no enclosing card)
- Optional starter playlists section (demo-only)
- Starter playlists use image + title below pattern (no overlay)

#### Populated State

- Playlist grid
- Image cover (16:10 ratio)
- Title below image
- Optional metadata row
- Entire tile clickable

No passive empty-state card.

---

### Playlist Detail (`/playlists/:playlistId`)

- Displays playlist metadata
- Lists external inspiration links
- Add Link form posts to backend
- UI updates immediately after POST

---

### Quiz (`/quiz`)

- Step-based flow
- Locked tile sizing for consistency
- No internal scroll
- Reduced spacing for task-focused rhythm
- Stores completion flag in `localStorage`

---

### Browse & Booking (Input Pages)

- Contextual image background
- Centered muted-gray task card
- Reduced nav → card spacing
- Slightly reduced internal card padding
- No photographic tiles

---

## API Integration

Located in:
src/api/client.js

Current endpoints used:

- `login`
- `register`
- `getPlaylists`
- `getPlaylistDetail`
- `addPlaylistLink`

Playlist Hub uses API data but overlays demo cover images for presentation.

---

## Folder Structure

src/
api/
components/
pages/
styles/
App.jsx
main.jsx

- `pages/` – route-level components
- `styles/design-system.css` – global layout & surface system
- `App.jsx` – routing + background mode logic

---

## Environment Variables

Stored in `.env` (not committed).

Required:
VITE_API_URL=http://localhost:3000

---

## Running Locally

Install dependencies:
npm install

Start dev server:
npm run dev

Open:
http://localhost:5173

---

## Design Constraints (Must Be Preserved)

- No mixing photo background with photo tiles.
- Only one background mode per page.
- Cards use muted gray (`#F9FAFB`), not white.
- Sticky nav must remain global.
- Task pages use tighter vertical rhythm.
- Content pages retain generous spacing.
- No scroll inside cards.

Future development should adhere to these constraints to maintain system coherence.

---

## Scope Note

This frontend demonstrates:

- Structured design system implementation
- Clean route architecture
- Expandable UI patterns
- Demo-ready user flows

It is demo-ready but not feature-complete.
