---
name: fluent-ui-a11y-interaction-review
description: 'Review Fluent UI React v9 changes for accessibility and interaction regressions. Use for PR reviews, refactors, or bugfixes where keyboard behavior, focus management, aria semantics, and interactive states may regress.'
argument-hint: 'Provide changed files or feature area and any known accessibility/interaction risks.'
user-invocable: true
disable-model-invocation: false
---

# Fluent UI Accessibility and Interaction Review

Perform a focused code review that prioritizes accessibility and interaction regressions in Fluent UI v9 React applications.

## When to Use
- Reviewing pull requests that modify UI components or flows.
- Refactoring Fluent components, styles, or state transitions.
- Investigating bugs related to keyboard support, focus, dialogs, menus, tabs, forms, or announcements.
- Validating redesigns that may alter behavior, semantics, or interaction feedback.

## Inputs
- Changed files, commit range, or feature area.
- Intended behavior and known edge cases.
- Any accessibility requirements (WCAG targets, keyboard-only parity, screen reader constraints).

## Review Procedure
1. Map affected interaction surfaces.
2. Check semantic correctness and naming.
3. Validate keyboard and focus flows.
4. Validate state feedback and motion.
5. Check form and error behavior.
6. Report findings by severity with file references.
7. Recommend minimal, safe fixes.

## Detailed Checks

### 1) Interaction Surface Mapping
- Identify all impacted controls and regions: buttons, links, inputs, comboboxes, dialogs, tab lists, menus, toasts, cards with click handlers.
- Determine whether behaviors changed intentionally or accidentally.

Decision points:
- If behavior changed without requirement coverage, flag as regression risk.
- If multiple components implement the same interaction differently, flag consistency risk.

### 2) Semantics and Accessible Names
- Verify proper roles and native semantics are preserved.
- Confirm controls have clear accessible names through visible labels, `aria-label`, or `aria-labelledby`.
- Ensure icons from `@fluentui/react-icons` are decorative-only unless meaning is conveyed accessibly.

Decision points:
- If semantic role and behavior mismatch, raise high severity.
- If name/label is ambiguous or duplicated in context, raise medium severity.

### 3) Keyboard and Focus
- Validate tab order follows visual and logical order.
- Verify all interactive elements are reachable and operable by keyboard.
- Confirm visible focus (`:focus-visible`) and managed focus for overlays (dialogs, popovers, menus).
- Check Esc/Enter/Space behavior and arrow-key patterns where expected by control type.

Decision points:
- If user can enter but not exit a focus trap, raise critical severity.
- If keyboard parity is missing for pointer-only interaction, raise high severity.

### 4) State Feedback and Motion
- Verify hover, active, selected, pressed, disabled, loading, and error states are perceivable.
- Ensure state changes are not communicated by color alone.
- Confirm transitions do not obscure state changes or block quick interaction.

Decision points:
- If disabled or loading state is unclear, raise medium severity.
- If animation harms usability and no reduced-motion fallback exists, raise medium severity.

### 5) Forms and Errors
- Validate input labels, descriptions, and error message associations.
- Ensure validation timing is predictable and messages are actionable.
- Confirm submit and retry flows are keyboard and screen-reader friendly.

Decision points:
- If errors are not announced or not associated to fields, raise high severity.
- If recovery path is unclear, raise medium severity.

### 6) Regression Reporting Format
Report findings first, ordered by severity.

For each finding include:
- Severity: Critical, High, Medium, or Low.
- What regressed and user impact.
- Exact file reference and concise evidence.
- Suggested minimal fix.

If no findings:
- State explicitly that no accessibility/interaction regressions were found.
- Note residual risks and testing gaps.

## Quality Bar
- Findings are concrete, reproducible, and tied to user impact.
- Severity is calibrated by accessibility and workflow breakage impact.
- Recommendations are minimal, Fluent-aligned, and low-risk.
- Review avoids stylistic nitpicks unless they cause accessibility or interaction risk.

## Output Contract
- A severity-ordered finding list with file references.
- Open questions or assumptions that affect confidence.
- Brief change-risk summary only after findings.
