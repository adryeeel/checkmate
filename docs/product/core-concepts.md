# Core Concepts

This document defines the fundamental concepts used throughout Checkmate.

## Work

**Work** is the central entity of the system. It represents a discrete unit of client work that flows through the system: from initiation through execution, validation, and billing.

### Characteristics

- **Discrete unit** — Each work item is a distinct unit of effort
- **Team-based** — Assigned to responsible teams for execution
- **Progressively resolved** — Moves from planning through execution to completion
- **Traceable** — All transitions and decisions are logged
- **Billable** — Triggers invoice generation upon completion

## Team Assignment

**Team Assignment** links individuals or teams to work, defining who executes it and is accountable for it.

### Key Characteristics

- **Permission mechanism** — Only assigned individuals can execute assigned work
- **Flexible scope** — One or more people can be assigned to one work item
- **Flexible assignment** — One person can be assigned to multiple work items
- **Controlled access** — Unassigned people cannot access the work
- **Audited changes** — All assignment changes are logged

## Execution & Progress

**Execution** is the phase where assigned teams actively work on the assignment.

### Key Characteristics

- **Progress tracking** — Status updates reflect real-world progress
- **Visibility** — Managers can see execution progress in real-time
- **Artifact collection** — Deliverables and evidence are attached
- **Locked period** — Execution records are locked once submitted for review
- **Audit trail** — All progress updates are timestamped and logged

## Approval & Validation

**Approval** is the management validation step where work quality and completion are confirmed.

### Key Characteristics

- **Explicit decision** — Requires explicit management confirmation
- **Feedback mechanism** — Rejections include specific guidance
- **Revision cycles** — Work can be rejected and resubmitted multiple times
- **Completion trigger** — Approval moves work to completion
- **Immutable record** — Approval decision is recorded and final

## Automation & Billing

**Automation** generates downstream artifacts when work is approved.

### Generated Artifacts

- **Report** — Summary of completed work and effort
- **Invoice** — Billing document sent to client

### Key Characteristics

- **Automatic execution** — Triggered by approval, no manual steps
- **Template-based** — Consistent formatting and structure
- **Client delivery** — Invoices automatically sent to configured recipient
- **One-time generation** — Each work item generates exactly one set of artifacts
- **Audit of automation** — All generated artifacts are logged with timestamp

## Roles

Three core roles interact with Checkmate:

- **Admin** — System-wide access and configuration
- **Manager** — Creates, assigns, approves, and oversees work requests
- **Employee** — Executes assigned work and reports progress

See [`roles-and-users.md`](./roles-and-users.md) for detailed permissions.

## Audit Log

An **Audit Log** is an immutable record of all key system actions.

Tracked events include:

- State transitions
- Team assignments
- Approval/rejection decisions
- Invoice generation
- Account changes

All audit entries include timestamp, actor, action, and details.
