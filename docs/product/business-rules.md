# Business Rules

This document codifies the constraints and invariants that govern system behavior in Checkmate.

## Access & Permission Rules

### User Role Hierarchy

```
Admin
  ├─ Can manage all users and system settings
  ├─ Can access all work
  └─ Has unrestricted permissions

Manager
  ├─ Can initiate and manage work
  ├─ Can assign and reassign teams
  └─ Can approve/reject work (only in assigned scope)

Employee
  ├─ Can execute assigned work
  ├─ Can update progress on assigned work
  └─ Has read-only access to own assignments
```

### Permission Enforcement

1. **Authentication required** — All users must authenticate before accessing the system
2. **Role-based access control** — Permissions enforced at API level, not just UI
3. **Team visibility** — Employees only see work assigned to them
4. **Manager scope** — Managers see work they initiated or are involved in
5. **Admin omniscience** — Admins see all data

## Work Progression Rules

### Work Flow Rules

1. **Linear progression** — Work progresses from initiation through execution to approval and completion
2. **No skipping stages** — Work must progress through all phases in order
3. **Rejection cycles** — Rejected work returns to execution phase (not to initiation)
4. **Terminal completion** — Completed and invoiced work is final; no further changes
5. **Flow logging** — Every work transition is recorded with actor and timestamp

### Assignment Rules

1. **Assignment required** — Work must have assigned team before execution
2. **Assignment timing** — Can be assigned immediately after initiation or later
3. **Reassignment window** — Can only be reassigned before execution begins
4. **Lock on execution** — Cannot reassign once work execution has started
5. **Multiple employees** — One or more employees can be assigned per work item
6. **Exclusive execution** — Only assigned employees can execute work

### Editing Rules

1. **Details editable during planning** — Title, description, scope, cost can be changed before assignment
2. **Lock after assignment** — Cannot edit work details once team is assigned
3. **No editing during execution** — Cannot modify work after execution begins
4. **Read-only after submission** — Submitted and approved work are immutable to all users

## Approval & Billing Rules

### Approval Requirements

1. **Manager approval required** — Work cannot be completed without explicit manager approval
2. **Review before approval** — Manager must review submitted work
3. **No auto-approval** — Approval is never automatic; explicit action required
4. **One approval per work item** — Single manager approval completes the work
5. **Approval is final** — Cannot undo approval (only audit trail remains)

### Rejection Rules

1. **Feedback required** — Rejections must include specific feedback
2. **Clear requirements** — Feedback must clarify what needs to be revised
3. **No penalty** — Rejected work does not count against employee or cost
4. **Re-submission allowed** — Team can resubmit after revising
5. **Multiple rejections** — Work can be rejected and resubmitted multiple times

### Billing Rules

1. **Completion triggers billing** — Only completed work is invoiced
2. **Approval triggers generation** — Invoice generates immediately upon approval
3. **Auto-send to client** — Generated invoices automatically sent to client contact
4. **One invoice per work item** — Each work item generates exactly one invoice
5. **No manual invoicing** — Invoices are always system-generated (not manual)
6. **Delivery tracking** — Invoice delivery is tracked and logged

## Data & Audit Rules

### Audit Logging

1. **Immutable logs** — Audit entries cannot be edited or deleted
2. **Complete history** — All key actions are logged
3. **Timestamp precision** — All entries include precise timestamp
4. **Actor identification** — All actions recorded with user ID and name
5. **Context capture** — Relevant details captured for each action
6. **Retention** — Audit logs retained indefinitely

### Logged Actions

The following actions are always logged:

- Work initiation
- Work progression/transitions
- Team assignments and reassignments
- Work approval and rejection
- Invoice generation and delivery
- User account changes
- Permission changes
- System configuration changes

### Data Retention

1. **User deletion policy** — Deleting a user does NOT delete their historical records
2. **Work retention** — Completed work is retained indefinitely
3. **Invoice retention** — Invoices are retained for legal/tax compliance
4. **Audit retention** — Audit logs retained for minimum 7 years (configurable)

## Employee & Team Rules

### Assignment Permissions

1. **Assignment creates permissions** — Employees have permissions only via assignment
2. **Exclusive access** — Unassigned employees cannot see the work
3. **Team participation** — All assigned employees have full execution permissions
4. **Multiple assignments** — Employees can be assigned to multiple work items
5. **No self-assignment** — Employees cannot assign themselves

### Execution Rules

1. **Only assigned can execute** — Unassigned employees cannot update work status
2. **Start permission** — Assigned employees can initiate work execution
3. **Status updates** — Only assigned employees can update progress
4. **Submission permission** — Only assigned employees can submit for review
5. **No guest access** — External users cannot access work

## System Integrity Rules

### Consistency

1. **Single source of truth** — Each work item has one definitive state
2. **State consistency** — State changes are atomic (all-or-nothing)
3. **Referential integrity** — Cannot delete users with active assignments
4. **Cascade rules** — Cannot delete teams with active work

### Validation

1. **Required fields** — All work items must have title, scope, and cost
2. **Email validation** — User emails must be valid and unique
3. **Duplicate prevention** — Cannot create duplicate work for same client on same date
4. **Cost validation** — Work cost must be positive number

### Concurrency

1. **Lock prevention** — Simultaneous edits are prevented via optimistic locking
2. **Last-write-wins** — If conflicts occur, most recent change takes precedence
3. **Notification on conflict** — Users notified if their change was superseded

## Business Policy Rules

### Visibility & Reporting

1. **Manager visibility** — Managers see only their own and team work
2. **Employee visibility** — Employees see only assigned work
3. **Admin visibility** — Admins see all work system-wide
4. **Client data isolation** — Each client's data is isolated (single-tenant)

### Service Level

1. **No approval SLA** — No automatic approval deadlines
2. **No execution limits** — No forced completion deadlines
3. **Flexible timelines** — Managers can extend or adjust timelines
4. **Audit of delays** — All timeline extensions logged

### Compliance

1. **SOC 2 compliance** — System designed for SOC 2 Type II
2. **GDPR ready** — User data deletion capabilities
3. **Audit trail** — Immutable audit logs for compliance verification
4. **PII protection** — Sensitive data encrypted at rest and in transit
