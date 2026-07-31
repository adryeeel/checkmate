# Architecture Decisions Summary

## Key decisions

This document summarizes the architectural decisions already reflected in the repository and the direction now being formalized for the next implementation phase.

### Repository structure

- Use a monorepo with `apps/` and `packages/`.
- Keep shared tooling and configuration centralized.

### Frontend stack

- Use Next.js, React, and TypeScript for the web application.

### Backend stack

- Use NestJS with Fastify for the dedicated backend application.

### Data store

- Use PostgreSQL as the relational database for persisted business data.

### Authentication and access control

- Authentication and role-based authorization should be part of the first implementation phase.

## Why these choices fit the product

These decisions support a product that needs:

- a maintainable web experience
- a structured backend for workflow logic
- relational integrity for approvals and billing data
- clear separation between application code and shared infrastructure
