# Roles & Users

This document defines the user types within Checkmate and their capabilities and responsibilities.

## Target Users & Company Types

Checkmate is designed for:

- **Service-based SMBs** — Boutique agencies and service firms
- **Agencies** — Digital, creative, and consulting agencies
- **Project teams** — In-house teams executing client work

## Core Roles

### Admin

**Purpose**: System administration and configuration

**Responsibilities**:

- Manage company settings and configuration
- Manage user accounts and roles
- Access system-wide audit logs
- Monitor system health

**Permissions**:

- Full system access
- Create/edit/delete users
- Configure company settings
- View all work and audit logs
- Manage billing and invoicing

### Manager

**Purpose**: Oversight and coordination of work execution

**Responsibilities**:

- Initiate work on behalf of clients
- Assign teams and employees to work
- Monitor work progress
- Review and approve completed work
- Oversee the path from work initiation to invoice

**Permissions**:

- Initiate and edit work (before assignment)
- Assign teams to work
- View all assigned work
- Update work status
- Review and approve submitted work
- Reject work with feedback
- View work reports and invoices
- View audit logs for their work

**Cannot**:

- Execute work on behalf of employees
- Modify system settings
- Manage user accounts

### Employee

**Purpose**: Execution of assigned work

**Responsibilities**:

- Execute assigned work according to specifications
- Update work progress with status changes
- Submit work for review when complete
- Provide feedback and coordinate with team

**Permissions**:

- View work assigned to them
- Update execution status on assigned work
- View team assignments
- Submit work for review
- View their own audit trail

**Cannot**:

- Initiate or assign work
- Approve or reject work
- Access other employees' work
- Modify system settings

## User Flows by Role

### Manager Workflow

1. Initiate work
2. Assign team members
3. Monitor execution progress
4. Review submitted work
5. Approve or reject
6. Invoice and reporting

### Employee Workflow

1. View assigned work
2. Update status as work progresses
3. Submit work for review
4. Respond to feedback if rejected
5. View completed and invoiced work

### Admin Workflow

1. Onboard new users
2. Assign roles and permissions
3. Configure company settings
4. Monitor system audit logs
5. Manage billing and subscriptions
