# ADR 001: Choose Repository Structure

Date: 2026-06-17
Status: Approved

## Context

- The project needs a repository layout that supports shared code, consistent tooling, and isolated application development.
- The repository should make common workflows such as formatting, linting, and dependency management easy to apply across projects.
- The structure should support small application teams working independently while enabling reuse of shared packages.

## Decision

Use a monorepo structure with:

- a root package for developer tooling and workspace configuration
- `apps/` for application projects
- `packages/` for shared packages and reusable libraries
- `pnpm-workspace.yaml` to manage workspace packages
- `turbo.json` for task orchestration and caching

## Decision Drivers

- Shared TypeScript and lint/format tooling should be centralized to avoid duplication.
- `pnpm` workspace support is convenient for package linking and dependency management.
- Turbo provides a consistent build/test/lint pipeline across apps and packages.
- Clear app/package separation simplifies ownership and reduces accidental coupling.

## Consequences

- Apps in `apps/` remain independent applications with their own package config.
- Shared libraries, config, and tooling live in `packages/`.
- Root scripts can orchestrate formatting, linting, and other workspace-wide tasks.
- New shared libraries and workspace packages can be added under `packages/`.
- Developers can work on apps in isolation while still benefiting from shared tooling.

## Alternatives Considered

- **Single repository per app**
    - Pros: complete isolation, simpler per-app package files.
    - Cons: duplicated tooling, harder to share code and enforce consistency.

- **Flat repo without `apps/` and `packages/` directories**
    - Pros: fewer top-level directories.
    - Cons: less organization, harder to distinguish applications from shared packages.

- **Separate repos for shared packages**
    - Pros: strict boundaries, independent release cycles.
    - Cons: more overhead for local development and cross-package changes.

## Notes

- The current structure supports the next phase of development while preserving flexibility for future refactors.
