---
description: "Use when writing or refactoring React + TypeScript source files in Fluent UI v9 apps. Enforces strict Fluent token usage, bans hard-coded visual values, and standardizes styling with makeStyles and theme tokens."
name: "Fluent UI Strict Token Usage"
applyTo: "src/**/*.{ts,tsx}"
---

# Fluent UI Strict Token Usage

Apply these rules to all source-file UI changes.

## Required Rules
- Use Fluent UI v9 styling primitives (`makeStyles`, `mergeClasses`, `tokens`, `theme`) for visual styling.
- Prefer semantic tokens first, then alias tokens, and use raw values only when no token exists.
- Use `@fluentui/react-components` spacing, typography, radius, shadow, stroke, and motion tokens.
- Keep state styles explicit for `:hover`, `:active`, `:focus-visible`, `:disabled`, and selected states where applicable.
- Use `@fluentui/react-icons` for iconography, not mixed icon libraries.

## Prohibited Patterns
- Hard-coded hex/rgb/hsl colors in component styles.
- Hard-coded spacing, border radius, border width, shadow, or z-index magic numbers when an equivalent token exists.
- Ad-hoc CSS files or inline style literals that bypass Fluent token usage.
- Replacing Fluent components with plain HTML controls when Fluent equivalents exist.

## Accessibility and Interaction Constraints
- Keep focus indicators visible and token-driven.
- Decorative icons must be hidden from assistive tech; meaningful icons must have accessible naming in context.
- Do not remove default keyboard behavior from interactive Fluent components unless behavior is replaced accessibly.

## Implementation Pattern
1. Start with Fluent component primitives.
2. Create styles with `makeStyles`.
3. Replace raw visual values with tokens.
4. Verify interaction states and keyboard behavior.
5. Confirm no hard-coded visual values remain.

## Review Checklist
- Are all visual properties token-driven where possible?
- Are icons from `@fluentui/react-icons` and used accessibly?
- Are interaction and focus states present and consistent?
- Is there any style drift from the active theme?

## Exceptions
- If no suitable token exists, document the exception inline with a short justification comment.
- Keep exceptions rare and scoped to the smallest possible surface.
