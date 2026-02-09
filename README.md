# Wistaway Mini – Frontend

## Overview

This repository contains the frontend application for **Wistaway Mini**, a discovery-first travel app focused on intent-based playlists and external inspiration.

The frontend allows users to:

- log in with existing credentials
- view their own playlists
- navigate to a playlist detail page
- view saved external inspiration links
- add new links (TikTok, Instagram, YouTube, webpages) to playlists

The frontend is designed to demonstrate a complete end-to-end vertical slice in coordination with the backend API.

---

## Tech Stack

- React
- Vite
- React Router
- JavaScript
- CSS
- Netlify (deployment planned)

---

## Core Features

- JWT-based user authentication
- Playlist list page showing user-owned playlists
- Playlist detail page displaying playlist metadata and saved links
- Add Link form that posts to the backend and updates the UI immediately

---

## Architecture Overview

The frontend is organized by responsibility:

- src/api/ – API client and request helpers
- src/pages/ – Page-level React components
- src/styles/ – Shared application styles
- App.jsx – Route definitions
- main.jsx – Application bootstrap and router setup

---

## Component Overview

### Login.jsx

Handles user authentication by submitting credentials to the backend login endpoint, storing the returned JWT, and redirecting the user into the app.

### Playlists.jsx

Fetches and displays all playlists owned by the authenticated user and provides navigation to individual playlist detail pages.

### PlaylistDetail.jsx

Displays a single playlist’s metadata and associated inspiration links and includes a form for adding new external links to the playlist.

### App.jsx

Defines the client-side routing structure for the application.

### main.jsx

Bootstraps the React application and configures routing.

---

## Environment Variables

Environment variables are stored in a .env file (not committed).

Required variables:

    VITE_API_URL=http://localhost:3000

---

## Running the Project Locally

1. Install dependencies:

   npm install

2. Start the dev server:

   npm run dev

3. Open the application:

   http://localhost:5173

---

## Notes

This frontend is intentionally scoped to demonstrate a complete end-to-end vertical slice rather than a fully polished consumer product.
