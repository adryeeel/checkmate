# ADR 003: Choose Back-end Framework

Date: 2026-06-17
Status: Approved

## Context

- The backend must provide a maintainable, extensible API platform with strong TypeScript support.
- The architecture should support modular services, dependency injection, and clear service boundaries.
- Request handling must be low-friction while supporting performance-sensitive HTTP workloads.
- The backend should provide a clear path for validation, exception handling, and structured service composition.

## Decision

Use **NestJS + TypeScript** with the **Fastify adapter** for the backend implementation.

## Decision Drivers

- Need a structured module/service/controller architecture with dependency injection.
- Need high-performance HTTP handling and schema-driven request/response processing.
- Need integrated validation, exception handling, and application-level routing conventions.
- Need a backend foundation that supports maintainable service boundaries and evolution over time.

## Consequences

- The backend will be implemented as a NestJS application using Fastify as the HTTP server.
- NestJS provides a structured module/service/controller architecture, dependency injection, and integrated validation.
- Fastify improves request performance, payload handling, and schema-driven serialization compared to the default Express runtime.
- The implementation will rely on NestJS conventions for application bootstrapping, exception handling, and middleware/guard patterns.
- Future optimizations can leverage Fastify-specific features such as schema-based routes and HTTP/2 support.
- The team accepts the operational characteristics of NestJS plus the additional dependency on the Fastify ecosystem.

## Alternatives Considered

- **NestJS with Express**
    - Pros: Familiar runtime and broader community examples.
    - Cons: Lower throughput and less efficient request serialization than Fastify.

- **Fastify without NestJS**
    - Pros: Minimal framework overhead and direct access to Fastify APIs.
    - Cons: Requires custom structure for modularity, DI, and validation conventions.

- **Express + TypeScript**
    - Pros: Simple, well-understood HTTP server model.
    - Cons: More boilerplate for structured architecture, DI, and validation.

- **tRPC**
    - Pros: End-to-end type safety for RPC-style APIs.
    - Cons: Strongly couples API design to TypeScript clients and does not address the need for a full backend service framework.

## Notes

- The chosen approach balances architectural structure with runtime performance.
- If backend requirements later demand a different runtime, the application-level services and modules should be designed for portability.
