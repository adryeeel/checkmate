# User Flows

This document describes the step-by-step interactions users have with Checkmate across common scenarios.

## Flow 1: Manager Initiates and Assigns Work

**Goal**: Manager initiates work and assigns a team to execute it

**Preconditions**:

- Manager is logged in
- Team members exist in the system

**Steps**:

1. Manager navigates to "Work" dashboard
2. Clicks "Create New Work"
3. Fills in required fields:
    - Work title
    - Client name
    - Scope and description
    - Expected cost/budget
    - Due date (optional)
4. Reviews information
5. Clicks "Create Work"
    - System creates work in initial state
    - Work ID is generated
    - Audit log records creation
6. System displays confirmation and next step prompt
7. Manager clicks "Assign Team"
8. Manager searches for and selects employees to assign
9. Reviews assignment details
10. Clicks "Confirm Assignment"
    - System records the assignment
    - Assigned employees gain access to the work
    - Audit log records assignment with timestamp and manager ID
11. System displays confirmation

**Outcome**: Work is now visible to assigned employees and ready for execution

## Flow 2: Employee Executes Assigned Work

**Goal**: Assigned employee begins and tracks work progress toward completion

**Preconditions**:

- Employee is logged in
- Work is assigned to the employee

**Steps**:

1. Employee navigates to "My Work" or "Assigned Work"
2. Locates and opens assigned work
3. Reviews scope and requirements
4. Clicks "Start Work" to begin execution
    - System records work start
    - Execution timer starts (for tracking)
    - Audit log records start time
5. Employee begins work and updates progress:
    - Adds status notes (e.g., "Completed phase 1 of 3")
    - Attaches completed artifacts/deliverables
    - Updates progress percentage or milestone status
6. As work continues, employee periodically updates:
    - Click "Update Progress"
    - Add new status notes or milestones
    - Attach additional artifacts
    - System logs each update with timestamp
7. When work is complete, employee clicks "Submit for Review"
    - System records work submission
    - Work details become read-only for employee
    - Manager is notified of submission
    - Audit log records submission with timestamp
8. System displays "Work submitted successfully"

**Outcome**: Work is now awaiting manager review and approval

## Flow 3: Manager Reviews and Approves Work

**Goal**: Manager reviews submitted work and makes approval decision

**Preconditions**:

- Manager is logged in
- Work is submitted for review
- Manager has permission to approve this work

**Steps**:

1. Manager receives notification that work is submitted for review
2. Manager navigates to "Pending Approvals" or work dashboard
3. Opens the work item
4. Reviews submitted work:
    - Reads scope and completion summary
    - Views all submitted artifacts and deliverables
    - Checks progress notes and timeline
    - Views execution history in timeline
5. Manager decides on approval:

### Approval Path:

6A. Manager confirms work meets all requirements
7A. Clicks "Approve Work"
8A. System displays confirmation dialog
9A. Manager confirms approval
10A. System records approval
11A. System automatically: - Generates work report - Generates invoice - Sends invoice to client - Records completion timestamp
12A. Audit log records approval with manager ID and timestamp
13A. Employee is notified of approval
14A. System displays "Work approved and invoiced"

### Rejection Path:

6B. Manager identifies issues or missing requirements
7B. Clicks "Request Changes"
8B. Enters specific feedback and required revisions
9B. Clicks "Return to Team"
10B. System records rejection and returns work to execution phase
11B. Work details become editable for assigned team
12B. Audit log records rejection with manager ID, timestamp, and feedback
13B. Assigned team is notified with feedback
14B. System displays "Work returned for revision"

**Outcome**:

- If approved: Work is completed, invoiced, and closed
- If rejected: Work returns to execution phase with feedback

## Flow 4: Manager Views Billing Summary

**Goal**: Manager reviews invoices generated and billing status

**Preconditions**:

- Manager is logged in

**Steps**:

1. Manager navigates to "Billing" or "Invoices" section
2. Views list of generated invoices with:
    - Invoice number
    - Related work item
    - Client name
    - Amount
    - Status (Generated, Sent, Paid)
    - Generation and delivery dates
3. Clicks on an invoice to view details:
    - Full invoice document
    - Work summary
    - Pricing breakdown
    - Payment terms
    - Delivery status and timestamp
4. Can export invoice as PDF or print
5. Can export billing report covering a date range

**Outcome**: Manager has full visibility into billing and invoice delivery

## Flow 5: Admin Onboards New User

**Goal**: Admin creates user account and assigns role

**Preconditions**:

- Admin is logged in

**Steps**:

1. Admin navigates to "User Management" section
2. Clicks "Add New User"
3. Enters user information:
    - First and last name
    - Email address
    - Phone (optional)
4. Selects user role:
    - Admin
    - Manager
    - Employee
5. Configures role-specific settings (optional)
6. Clicks "Create User"
    - System generates temporary password or sends invite link
    - Audit log records user creation
7. System displays confirmation with:
    - New user email
    - Temporary credentials or invite link instructions
8. Admin sends credentials/invite to new user
9. New user receives email and sets up account

**Outcome**: New user can log in and access Checkmate based on assigned role

## Common User Journeys

### Manager's Full Work Week

Monday: Initiate 3 new work items for clients
Tuesday: Assign teams and review work in progress
Wednesday: Approve completed work (auto-generates invoices)
Thursday: Export weekly billing report and send to finance
Friday: Review audit logs for compliance

### Employee's Weekly Work

Monday–Thursday: Work on 2–3 assigned work items, updating progress
Friday: Submit completed work for review, check feedback on rejected work

### Admin's Monthly Tasks

- Onboard new users
- Audit access logs for compliance
- Review system health and error logs
- Configure company settings and policies
