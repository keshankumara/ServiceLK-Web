# ServiceLK Web – Frontend

This folder contains the frontend web application for **ServiceLK Web**. It is built with **React** and **Vite**.

## Tech Stack
- React
- Vite
- React Router
- ESLint

## Prerequisites
- Node.js (LTS recommended)
- npm (ships with Node.js)

## Getting Started

From the repository root:

```bash
cd frontend
npm install
```

### Run in development
```bash
npm run dev
```

Vite will print the local dev URL in the terminal (commonly `http://localhost:5173`).

### Build for production
```bash
npm run build
```

### Preview the production build
```bash
npm run preview
```

## Scripts
- `npm run dev` – start dev server
- `npm run build` – create production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Environment Variables
This project uses Vite. Any client-side environment variables must be prefixed with `VITE_`.

If your setup requires environment variables, create a file named `.env` (or `.env.local`) inside `frontend/` and add your values there.

## Notes
- The Vite configuration is in `frontend/vite.config.js`.\n