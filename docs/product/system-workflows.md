# System Workflows

This document describes the core behavioral patterns in Checkmate—how work flows through the system, how decisions are made, and how the system ensures accountability and traceability.

## Work Submission & Execution Pattern

The system enables a controlled flow of work from initiation to completion.

### Phases

**1. Initiation**

- Work is submitted to the system with requirements, scope, and context
- Work is assigned to responsible teams/individuals
- Assigned parties gain visibility and execution permissions

**2. Execution**

- Assigned teams execute the work according to specification
- Progress is tracked and visible to management
- Work-in-progress can be updated but is not yet final

**3. Submission for Review**

- Team signals that work is complete and ready for validation
- Work becomes locked for further execution edits
- Management is notified to review

**4. Resolution**

- Management reviews completed work
- If work meets requirements: approve and close
- If work has issues: return for revision with specific feedback

### Key Behaviors

- **Permission-gated execution** — Only assigned teams can update work status
- **Clear submission point** — Work explicitly transitions from execution to review
- **Locked during review** — No edits allowed once submitted for approval
- **Feedback loop** — Rejection includes specific guidance for revision
- **Audit trail** — All transitions and decisions are immutable and timestamped

## Approval & Validation Pattern

The system enforces managerial validation before work is considered complete.

### Decision Points

**Approval Path**

- Management confirms work meets all stated requirements
- Work is marked complete and locked
- Subsequent automation is triggered (reporting, invoicing)

**Rejection Path**

- Management identifies specific issues or missing requirements
- Detailed feedback is provided to execution team
- Work is returned to execution phase for revision
- Team can resubmit after addressing feedback
- Multiple revisions are supported without penalty

### Key Behaviors

- **Explicit validation** — No automatic completion; requires management decision
- **Detailed feedback** — Rejections include specific, actionable guidance
- **Re-submission cycles** — Team can iterate multiple times
- **One approval required** — Single approval completes the work
- **Decision is final** — Approval cannot be undone (only audit trail remains)

## Team Assignment & Permissions Pattern

The system controls work execution through explicit team assignment.

### Assignment Characteristics

- **Explicit linking** — Teams/individuals are explicitly assigned to work
- **Permission creation** — Assignment determines who can execute
- **Visibility control** — Only assigned teams can see the work
- **Flexible team size** — Multiple people can be assigned to one work item
- **Flexible person scope** — One person can be assigned to multiple work items

### Access Control Rules

- **Execution gated by assignment** — Cannot execute work without explicit assignment
- **Status update permissions** — Only assigned teams update execution status
- **Reassignment window** — Can only reassign before execution begins
- **No self-assignment** — People cannot assign themselves

### Key Behaviors

- **Role-based enforcement** — Permissions checked at system level, not just UI
- **Audit of assignments** — All assignment changes are logged
- **Clear ownership** — Assignment creates explicit accountability

## Completion & Automation Pattern

When work is approved, the system automatically generates downstream artifacts.

### Automation Trigger

Work approval triggers:

- Generation of completion documentation (work report/summary)
- Generation of billing documentation (invoice)
- Transmission to client (invoice delivery)

### Automation Characteristics

- **Automatic execution** — No manual steps required
- **Template-based** — Consistent formatting across all outputs
- **Client delivery** — Invoices sent automatically to configured recipient
- **Delivery tracking** — System records when/if invoice reached client
- **One-time generation** — Each completed work generates exactly one set of artifacts

### Key Behaviors

- **No manual invoicing** — Invoices always system-generated
- **Completion required** — Can only invoice approved work
- **Atomic generation** — Report and invoice generated together
- **Audit of automation** — All generated artifacts are logged with timestamp

## Approval Workflow Patterns

The system supports different styles of approval decisions based on work characteristics.

### Standard Approval

- Management reviews work once
- Decision: approve or request revisions
- Used for most work items

### Conditional Approval

- Management may approve with minor notes (not blocking)
- Work proceeds to completion but notes are recorded
- Useful for work that's substantially complete but has minor issues

### Escalation Paths

- Complex work may require input from multiple stakeholders
- System can be configured to require multiple approvals
- Each approval is independent and logged

## Audit & Traceability Pattern

All key system actions are immutable and traceable for compliance and accountability.

### Logged Events

- All work transitions (submission, approval, rejection)
- All team assignments and reassignments
- All approval decisions with feedback
- All automation outputs (reports, invoices)
- All user actions (logins, account changes)

### Audit Trail Characteristics

- **Immutable** — Entries cannot be edited or deleted
- **Timestamped** — Precise timestamp for each action
- **Actor identified** — User performing action is recorded
- **Context captured** — Relevant details (feedback, decision rationale) recorded
- **Indefinite retention** — Logs retained for compliance

### Key Behaviors

- **Complete history** — Full record of work from initiation to closure
- **No hidden changes** — All changes are visible in audit
- **Compliance support** — Audit trail supports legal/regulatory requirements

## Interaction Patterns by Role

### Management Pattern

1. Initiate work with requirements
2. Assign teams
3. Monitor execution progress
4. Review submitted work
5. Make approval/rejection decision
6. Oversee automation outcomes

### Execution Pattern

1. Receive assignment notification
2. Review work requirements
3. Execute assigned work
4. Update progress regularly
5. Submit for review when complete
6. Respond to feedback if revision requested

### System Pattern

1. Enforce permissions based on assignments
2. Control work progression (execution → submission → approval → completion)
3. Lock work at transition points to prevent conflicts
4. Generate artifacts on approval
5. Record all actions for audit trail
