# Architecture Documentation

This directory contains architecture guidance and decision records for the Checkmate project.

## Purpose

- Capture the high-level architecture direction for the repository.
- Document important technology decisions and trade-offs.
- Provide a reference for future contributors and maintainers.

## Structure

- `decision/` contains Architecture Decision Records (ADRs) for major platform choices.
- `README.md` describes the architecture documentation approach and links to current decisions.

## Current Decisions

- `ADR 001: Choose Repository Structure` — monorepo layout with `apps/` and `packages/`.
- `ADR 002: Choose Front-end Framework` — `Next.js + React + TypeScript` for `apps/web`.
- `ADR 003: Choose Back-end Framework` — `NestJS + TypeScript` for `apps/api`.

## How to use this documentation

- Add new ADRs for meaningful architecture decisions.
- Keep decisions concise and focused on context, drivers, alternatives, and consequences.
- Use this space to explain why the project adopted a particular path, not just what the path is.
