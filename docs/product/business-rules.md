# Business Rules

This document captures the product-level rules that appear to shape Checkmate's intended behavior. These rules should be treated as working product guidance rather than finalized policy decisions.

## Core Rule Areas

### Access and permissions

- Access should be role-based so different users can perform the actions appropriate to their responsibilities.
- Managers, employees, and administrators should each have clearly defined scope within the system.
- Access decisions should be enforceable at the product level and should not depend only on the user interface.

### Work progression

- Work should follow an explicit lifecycle from initiation through execution, review, and completion.
- Approval should be part of the workflow before work is considered complete and ready for downstream processes.
- Rejected work should be able to return to the execution phase with feedback so the team can revise it.

### Accountability and auditability

- Key actions should be recorded in a way that supports accountability and traceability.
- The system should preserve a clear history of important decisions, assignments, and workflow transitions.

### Billing and reporting

- Billing and reporting should be tied to completed and approved work rather than to every intermediate status change.
- Downstream outputs should be generated from the system of record once the work has reached the appropriate completion state.

## Guidance for future refinement

Specific policy values, retention periods, approval thresholds, and permission details should be defined later as the product scope becomes clearer. The current documentation is intentionally broad so it remains aligned with the product direction without overcommitting to unsupported details.
