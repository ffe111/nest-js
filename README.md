# NestJS REST API Playground

English | [ภาษาไทย](README.th.md)

A small NestJS 10 backend for learning how controllers, services, and modules fit together. Explore the `/users`, `/todo`, and `/beers` modules to compare their routes and data handling.

## Quick start

Start a **local development** MongoDB instance at `mongodb://localhost:27017/test`, as configured in [`app.module.ts`](src/app.module.ts). Then run:

```bash
npm ci
npm run start:dev
```

The application listens on [localhost:3000](http://localhost:3000). Try `GET /` first, then explore the route definitions in [`src/users/`](src/users/), [`src/todo/`](src/todo/), and [`src/beers/`](src/beers/).

| Command | Purpose |
| --- | --- |
| `npm run build` | Compile TypeScript |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |

This is a learning project; use sample records and a disposable local database.

<!-- Maintainers: Update the English README first, then mirror the change in README.th.md. -->
