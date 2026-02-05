# MBPT Project Specification

This document summarizes the backend and frontend specifications and provides installation steps for each component.

**Frontend Specification**

- Stack: React 19 + Vite 7 + TypeScript 5.9.
- UI: Tailwind CSS 4, Heroicons.
- Data layer: Axios + TanStack React Query 5.
- Routing: React Router 7.
- Charts: Chart.js 4.
- Dev tooling: ESLint 9, Vite alias `@` → `src`.
- API base URL: `VITE_API_URL` (default `http://localhost:3000/api`).

**Frontend Installation**

Requirements: Node.js (LTS recommended), npm.

```bash
cd frontend
npm install
```

Create or update `frontend/.env`:

```
VITE_API_URL=http://localhost:3000/api
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
