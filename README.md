# ServiceLK-Web

Last updated: 2026-02-26

ServiceLK-Web is a full-stack web application consisting of a **frontend** (React + Vite) and a **backend/API**.

## Project Structure
- `frontend/` – React + Vite frontend application (see `frontend/README.md`)
- `backend/` – Backend/API (see `backend/README.md`)

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

The development server typically runs at `http://localhost:5173`.

### Backend
See `backend/README.md` for the backend stack-specific setup (dependencies, environment variables, and run commands).

## Environment Variables
- Frontend uses Vite; client-side variables must be prefixed with `VITE_` and are typically stored in `frontend/.env` or `frontend/.env.local`.
- Backend environment variables are configured in `backend/` (commonly via a `.env` file). Typical variables include `PORT`, `DATABASE_URL`, and auth secrets (e.g., `JWT_SECRET`).

## Contributing
Open an issue or pull request with a clear description of the change.
