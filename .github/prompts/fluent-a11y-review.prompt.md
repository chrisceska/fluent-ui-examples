---
description: "Run a Fluent UI v9 accessibility and interaction regression review on changed files, feature scope, or PR diff. Returns severity-ordered findings with minimal-fix recommendations."
name: "Fluent UI A11y Review"
argument-hint: "Provide scope, for example: changed files, feature area, or PR focus"
agent: "agent"
---
Perform a focused Fluent UI React v9 accessibility and interaction regression review.

Use the user-provided scope as the review target.
If no scope is provided, review the most recent relevant UI changes in the workspace.

Review focus:
- Semantic correctness and accessible naming
- Keyboard operability and focus management
- Interaction state feedback (hover, active, selected, disabled, loading, error)
- Form validation and error association behavior
- Icon accessibility and consistency with @fluentui/react-icons

Output format requirements:
1. Findings first, ordered by severity: Critical, High, Medium, Low.
2. For each finding include:
- Severity
- User impact
- Precise file reference
- Minimal safe fix
3. Then include open questions or assumptions.
4. End with a brief residual-risk note if no findings are discovered.

Apply the standards from the workspace skill:
- /fluent-ui-a11y-interaction-review
