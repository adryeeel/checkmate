# Product Documentation

This folder contains the current product documentation for Checkmate. The documents describe the intended product behavior, scope, and user experience captured in the repository context.

These materials are intentionally written at a product level. They focus on what Checkmate should do for users and how the system should behave, while avoiding implementation detail unless it is clearly supported by the codebase.

## Quick Navigation

### Core Understanding

- [Product overview](./overview.md) — problem, solution, and platform purpose
- [Core concepts](./core-concepts.md) — key entities and definitions

### System Design

- [Roles and users](./roles-and-users.md) — user types and permissions
- [System workflows](./system-workflows.md) — behavioral patterns and system behavior
- [Features](./features.md) — core system capabilities
- [User flows](./user-flows.md) — step-by-step user interactions
- [Business rules](./business-rules.md) — constraints and system behavior

### Scope & Planning

- [Scope](./scope.md) — MVP inclusions and future ideas

## Document Structure

Each document is focused on a specific aspect of the product:

| Document              | Purpose                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------- |
| `overview.md`         | Establish the problem space, proposed solution, and why Checkmate exists                  |
| `core-concepts.md`    | Define fundamental concepts (teams, assignments, approval, automation) used by the system |
| `roles-and-users.md`  | Describe user types and their capabilities                                                |
| `system-workflows.md` | Describe core behavioral patterns: how work flows, approval works, automation triggers    |
| `features.md`         | Enumerate and describe the core features                                                  |
| `user-flows.md`       | Describe how users interact with the system                                               |
| `business-rules.md`   | Codify system constraints and invariants                                                  |
| `scope.md`            | Define what's included in MVP and what's deferred                                         |

## Key Principles

This documentation defines **what the system is and how it behaves**, not how it is implemented or operated internally.

- **Pattern-driven**: System behavior is described through recurring patterns (submission, approval, automation)
- **Behavior-first**: Focus on system workflows, not implementation details or specific entities
- **Structured**: All work follows defined processes with clear control points
- **Traceable**: All key actions are audited and immutable
- **Automated**: Billing and reporting flow automatically from approval decisions
