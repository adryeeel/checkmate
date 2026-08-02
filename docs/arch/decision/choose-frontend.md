# ADR 002: Choose Front-end Framework

Date: 2026-06-17
Status: Approved

## Context

- The project needs a frontend framework that supports strong TypeScript, good developer experience, and reasonable long-term maintenance.
- The frontend should enable fast development of UI features while supporting page routing and server-rendering options.
- The framework should minimize upfront integration cost for a modern web application.

## Decision

Use **Next.js + React + TypeScript** as the frontend framework.

## Decision Drivers

- Need built-in routing, server-side rendering / static generation options, and a strong developer experience.
- React is mainstream, well-supported, and easier to maintain.
- The app needs to move quickly while remaining maintainable and extensible.
- Strong TypeScript support is required for a consistent application codebase.

## Consequences

- The frontend will be implemented as a Next.js application using React components and TypeScript.
- The app can later use SSR/SSG or incremental adoption of new Next features if needed.
- The team accepts a dependency on Next.js semantics and conventions.
- This choice reduces the need to evaluate less mature or more niche frontend frameworks for the first implementation.

## Alternatives Considered

- **React + Vite**
    - Pros: simpler build, faster cold-start dev server.
    - Cons: no built-in SSR/SSG and less integrated full-stack support.

- **Vanilla JS / minimal SPA**
    - Pros: very low framework lock-in.
    - Cons: poor productivity, harder to maintain at scale.

## Notes

- This ADR can be updated later if the team discovers strong reasons to move to a different frontend framework.
- The decision focuses on the first implementation of the Checkmate web app.
