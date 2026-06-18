# Scope

This document defines what is included in the MVP (Minimum Viable Product) and what is deferred to future releases.

## MVP — Phase 1 (In Scope)

### Core Work Management

- [x] Work initiation and lifecycle management
- [x] Structured work progression through system
- [x] Work progression validation
- [x] Work archival and history

### Team & Assignment

- [x] Team creation and management
- [x] Employee assignment to work
- [x] Multiple employees per work item
- [x] Role-based execution permissions
- [x] Assignment and reassignment capabilities

### Execution & Tracking

- [x] Employee work execution interface
- [x] Progress status updates
- [x] Artifact/deliverable attachment
- [x] Work submission for review
- [x] Progress timeline and history

### Review & Approval

- [x] Manager approval interface
- [x] Work rejection with feedback
- [x] Return to execution on rejection
- [x] Approval decision logging

### Billing & Reporting

- [x] Automatic work report generation upon completion
- [x] Automatic invoice generation from completed work
- [x] Invoice templating and formatting
- [x] Auto-send invoices to client contact
- [x] Invoice status tracking (Generated, Sent)
- [x] Basic billing dashboard

### User Management

- [x] User account creation and management
- [x] Three roles: Admin, Manager, Employee
- [x] Role-based access control
- [x] Password management and reset
- [x] User activation/deactivation

### Audit & Compliance

- [x] Immutable audit log of all key actions
- [x] Work progression logging
- [x] User activity tracking
- [x] Audit log export and filtering
- [x] Deletion policy (deleted users' work retained)

### UI/UX

- [x] Intuitive dashboard for each role
- [x] Work initiation flow
- [x] Assignment interface
- [x] Execution interface
- [x] Approval/rejection interface
- [x] Responsive design (desktop + mobile)

## Future Releases — Out of Scope

### Time Tracking

- [ ] Per-employee time tracking on work
- [ ] Billable vs. non-billable time tracking
- [ ] Time estimation vs. actual comparison
- [ ] Time-based billing models

**Rationale**: MVP focuses on work completion, not time tracking. Can be added via time estimates and actual hours in future.

### Advanced Scheduling

- [ ] AI-assisted task breakdown
- [ ] Dependency management between work items
- [ ] Resource allocation and capacity planning
- [ ] Gantt charts and timeline views
- [ ] Automated scheduling recommendations

**Rationale**: Manager judgment adequate for MVP. Scheduling becomes valuable at scale.

### Client-Facing Portal

- [ ] Client dashboard (read-only view of their work)
- [ ] Client payment portal
- [ ] Client approval of completed work
- [ ] Direct client-to-platform Work Request submission

**Rationale**: Internal management first; client portal adds value once platform is stable.

### Advanced Reporting

- [ ] Custom report builder
- [ ] Dashboards and KPI tracking
- [ ] Team productivity analytics
- [ ] Profitability analysis by client or project type
- [ ] Revenue forecasting

**Rationale**: Static reports sufficient for MVP. Advanced analytics deferred.

### Integrations

- [ ] Slack notifications and commands
- [ ] Email integration (receive Work Requests via email)
- [ ] Calendar integration (sync work timelines)
- [ ] Accounting software integration (auto-sync to QuickBooks, etc.)
- [ ] Project management tool integration

**Rationale**: Native platform sufficient for MVP. Integrations add value later.

### Multi-Company Support

- [ ] Support managing multiple companies from one account
- [ ] Cross-company reporting
- [ ] Shared employee pools
- [ ] Inter-company billing

**Rationale**: Single-company focus for MVP. Multi-company adds complexity.

### Advanced Authentication

- [ ] Two-factor authentication (2FA)
- [ ] Single sign-on (SSO)
- [ ] OAuth/OIDC provider integration
- [ ] SAML support

**Rationale**: Basic password auth sufficient for MVP.

### Workflow Automation

- [ ] Conditional state transitions
- [ ] Automated escalations on timeouts
- [ ] Custom approval workflows
- [ ] Workflow rules engine

**Rationale**: Linear workflow adequate for MVP. Custom workflows deferred.

### Payments & Subscriptions

- [ ] Automatic payment collection from invoices
- [ ] Subscription-based recurring Work Requests
- [ ] Payment plan management
- [ ] Dunning management for failed payments

**Rationale**: Invoice generation only; payment collection deferred.

### Templates & Standardization

- [ ] Work Request templates (reusable boilerplate)
- [ ] Approval workflow templates
- [ ] Invoice template customization (beyond basic formatting)
- [ ] Standard service catalog

**Rationale**: Manual creation sufficient for MVP. Templates valuable at scale.

### Compliance & Security

- [ ] Detailed permission hierarchies
- [ ] Field-level access control
- [ ] Encryption key management
- [ ] Formal compliance certifications (SOC 2, ISO 27001)
- [ ] Data residency requirements

**Rationale**: Basic security sufficient for MVP. Compliance certifications are post-MVP milestone.

## Design Principles for MVP

### What We're Optimizing For

1. **Simplicity** — Minimal feature set that solves the core problem
2. **Reliability** — What we build must work consistently
3. **Extensibility** — Architecture allows future additions without major rewrites
4. **Clarity** — Simple UI that doesn't overwhelm users

### What We're Deprioritizing

1. **Customization** — Features are standard, not custom-configurable
2. **Scale** — MVP designed for 100–500 users; scale comes later
3. **Perfection** — Good enough is good enough; perfection is enemy of done
4. **Optimization** — Functionality before performance tuning

## Transition to Phase 2

When we move beyond MVP, the following features will be reconsidered:

1. **Time tracking** — Enable better profitability analysis
2. **Client portal** — Improve client satisfaction
3. **Advanced reporting** — Support data-driven decision making
4. **Integrations** — Reduce manual context switching
5. **Automation** — Reduce manual overhead

These will be prioritized based on user feedback and market demand.
