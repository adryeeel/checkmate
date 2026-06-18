# Core Features

This document describes the core capabilities and features provided by Checkmate.

## 1. Work Initiation & Management

**Purpose**: Create and manage structured units of client work

**Capabilities**:

- Create new work items with title, description, scope, and expected cost
- Define work requirements and acceptance criteria
- Track work from initiation through completion and billing
- Edit work details before team assignment
- View all work items with filtering and search
- Export work data and reports

**Key Behaviors**:

- Work flows through the system from initiation to completion
- All work transitions are enforced and logged
- Work details are locked after team assignment begins
- Clear ownership and assignment visibility

## 2. Team Assignment System

**Purpose**: Assign teams and employees to work with defined permissions

**Capabilities**:

- Assign teams of one or more employees to work
- Define assignment timing (upfront or phased)
- View all assignments across the system
- Reassign teams if needed (before execution starts)
- Track historical assignments in audit logs
- Set execution permissions based on assignment

**Key Behaviors**:

- Only assigned employees can execute work
- Assignments define who can update work status
- Unassigned employees cannot see the work
- Multiple employees can be assigned to one work item
- Assignments create role-based access control

## 3. Work Execution Tracking

**Purpose**: Track progress of assigned work from start to submission

**Capabilities**:

- Employees update internal progress status
- Track work from start to completion submission
- Provide notes and updates during execution
- Link deliverables and artifacts to work items
- Monitor real-time execution status
- View progress history and changes

**Key Behaviors**:

- Only assigned employees can update status
- Status updates move work through the execution phase
- Work-in-progress is visible to manager and assigned team
- Status history is recorded for audit purposes
- Work becomes locked once submitted for review

## 4. Review & Approval System

**Purpose**: Ensure managerial validation of completed work before billing

**Capabilities**:

- Managers review submitted work
- Approve work that meets requirements
- Reject work with specific feedback
- Return work for revision without penalty
- Set approval criteria and requirements
- Track approval history per manager

**Key Behaviors**:

- Rejection returns work to execution phase
- Approval automatically triggers invoice generation
- Feedback is visible to team on rejection
- One approval required per work item
- Approval decision is immutable (logged in audit)

## 5. Billing & Reporting System

**Purpose**: Automate invoice and report generation based on completed work

**Capabilities**:

- Automatically generate Work Reports upon approval
- Automatically generate Invoices with client details
- Customize invoice formatting and details
- Auto-send invoices to configured client contact
- Track invoice status and delivery
- Export invoices and reports
- View billing history and payment tracking

**Key Behaviors**:

- Reports generate automatically when work is approved
- Invoices are generated from Work Report data
- Invoices include work summary, pricing, and terms
- Client automatically receives invoice upon generation
- Invoice delivery is tracked and logged
- Billing is triggered only after manager approval

## 6. Audit Log System

**Purpose**: Provide immutable, comprehensive tracking of all key system actions

**Capabilities**:

- Record all state transitions with timestamp and actor
- Log all team assignments and changes
- Track all approval and rejection decisions
- Record invoice generation and delivery events
- Log user logins and account changes
- Export audit logs for compliance and reporting
- Filter audit logs by date, actor, action, or work request

**Key Behaviors**:

- All audit entries are immutable (cannot be edited or deleted)
- Timestamps are precise (to the second)
- Actor information (user ID and name) is recorded
- Detailed context is captured for each action
- Audit logs are accessible to Admins and authorized Managers
- Historical records are maintained indefinitely

## 7. User & Permissions Management

**Purpose**: Manage user accounts and role-based access control

**Capabilities**:

- Create and manage user accounts
- Assign roles (Admin, Manager, Employee)
- Configure user permissions based on roles
- Manage user status (active/inactive)
- Set password policies and reset procedures
- Configure two-factor authentication
- Track user activity and login history

**Key Behaviors**:

- Role-based access control enforces permissions
- Permissions are enforced at action level (not just UI)
- Deleted users do not remove their historical work records
- User changes are logged in audit trail

## Feature Interactions

### Complete Work Lifecycle

1. **Manager initiates work** → Triggers Work Initiation & Management
2. **Manager assigns team** → Triggers Team Assignment System
3. **Employees update progress** → Triggers Work Execution Tracking
4. **Employee submits work** → Moves to approval phase
5. **Manager approves** → Triggers Review & Approval System
6. **Invoice auto-generates** → Triggers Billing & Reporting System
7. **All actions logged** → Triggers Audit Log System

This integration creates a seamless, auditable path from initiation to billing.
