# Current Architecture State

## Repository shape

The repository currently reflects an early implementation foundation rather than a full product platform.

- The root workspace uses pnpm and Turbo to coordinate shared tooling and package-level tasks.
- The web application lives in `apps/web` and is built with Next.js and React.
- Shared UI and styling infrastructure live in `packages/ui`.
- Shared TypeScript, formatting, and linting configuration live in `packages/typescript`, `packages/oxfmt`, and `packages/oxlint`.

## Existing runtime boundaries

The current codebase is centered on the presentation layer:

- The app shell is composed from the Next.js App Router under `apps/web/src/app`.
- The main page renders a branded landing experience and a header component.
- Theme support is provided through the shared UI package.

## What is not implemented yet

The current repository does not yet include:

- a dedicated backend application
- a persisted domain layer
- authentication and authorization flows
- workflow execution, approval, or billing services

## Architectural implication

The present structure is well suited for building a thin client experience first, while leaving room for a dedicated API and domain layer to be introduced later.
