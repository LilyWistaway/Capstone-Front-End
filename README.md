# Wistaway Mini – Frontend

## Overview

This repository contains the frontend application for **Wistaway Mini**, a discovery-first travel app centered on curated lodging properties and intent-based playlists.

The frontend is responsible for:

- user-facing UI and UX
- routing and protected views
- managing application state
- communicating with the backend API

---

## Tech Stack

- React
- React Router
- JavaScript
- Vite
- Netlify (deployment)

---

## Code Standards & Conventions

### General Principles

- State drives UI
- Keep components focused and reusable
- Separate UI concerns from API logic
- Favor readable JSX over compact JSX

---

### Naming Conventions

**Files & Components**

- Use `PascalCase` for React components and component files
  - `PlaylistDetail.jsx`
- Use `camelCase` for utility files and hooks

**Variables**

- Use `camelCase`
- Use nouns for state values
  - `playlists`
  - `selectedPlaylist`

**Functions**

- Use verbs
  - `fetchPlaylists`
  - `handleAddLink`

---

### Formatting & Style

- Remove unused imports and console logs
- Keep JSX clean and consistently formatted
- Avoid deeply nested components when possible

---

### Comments & Documentation

- Components should be readable without comments
- Add a short description comment at the top of:
  - pages
  - context providers
  - custom hooks

---

## Environment Variables

Environment variables are stored in a `.env` file (not committed).

Required variables:

```env
VITE_API_URL=http://localhost:3000
```
