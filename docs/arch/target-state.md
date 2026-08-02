# Target Architecture

## Overview

The target architecture for Checkmate is a modular monorepo with three main layers:

1. Presentation layer
    - The web application provides the user experience for interacting with work, approvals, and billing flows.

2. Application and domain layer
    - A dedicated backend application hosts the business workflows, validation rules, and service orchestration.
    - This layer owns the core domain model for assignments, approvals, billing, and auditability.

3. Data layer
    - PostgreSQL is the system of record for persisted business data.
    - The backend uses a relational model to ensure consistency for workflows and approval history.

## Proposed runtime structure

- `apps/web`
    - Next.js frontend for interactive product experiences
    - Responsible for rendering UI and communicating with the backend API

- `apps/api`
    - NestJS application with Fastify
    - Responsible for modules, services, controllers, validation, and dependency injection

- `packages/`
    - Shared libraries for UI primitives, domain contracts, validation helpers, and cross-cutting infrastructure

## Architectural principles

- Keep the frontend focused on interaction and presentation.
- Keep business rules and workflow orchestration in the backend domain layer.
- Use PostgreSQL for relational consistency and audit-friendly data models.
- Preserve clear boundaries between app packages, shared libraries, and infrastructure concerns.

## Initial implementation focus

The first implementation should prioritize:

- a dedicated API application under `apps/api`
- authentication and role-based authorization
- core domain entities such as users, teams, work items, approvals, and invoices
- API contracts that the frontend can consume reliably
