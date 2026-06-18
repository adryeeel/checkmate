# Product Documentation

This folder contains comprehensive product documentation for Checkmate, a platform that manages structured work execution, team assignment, and automated billing for service-based businesses.

## Quick Navigation

### Core Understanding

- [**Overview**](./overview.md) — Problem, solution, and platform purpose
- [**Core Concepts**](./core-concepts.md) — Key entities and definitions

### System Design

- [**Roles & Users**](./roles-and-users.md) — User types and permissions
- [**System Workflows**](./system-workflows.md) — Behavioral patterns and system behavior
- [**Features**](./features.md) — Core system capabilities
- [**User Flows**](./user-flows.md) — Step-by-step user interactions
- [**Business Rules**](./business-rules.md) — Constraints and system behavior

### Scope & Planning

- [**Scope**](./scope.md) — MVP inclusions and future ideas

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
