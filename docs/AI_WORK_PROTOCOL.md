# AI Work Protocol — 3D Interaktiv Ta'lim

Last updated: 2026-11-18

## Mission
Deliver a production-grade, secure education platform for grades 1–11. Optimize for verified working outcomes, not activity, promises, or long reports.

## Source of truth
- Read `docs/PROJECT_STATE.md` at the start of every session.
- GitHub is the source of truth for code and decisions. Supabase is the source of truth for persisted application data. Vercel is the source of truth for deployments. Figma is the source of truth for approved visual design.
- Re-check live state before relying on old notes. Mark stale or uncertain facts as NOT VERIFIED.
- Never ask the user to repeat information already present in these files or the connected project.

## Roles: ChatGPT and Claude
- ChatGPT: technical lead, planner, reviewer, security critic, integration coordinator, and independent verifier. Break work into small acceptance-tested tasks. Challenge weak assumptions. Do not claim completion without evidence.
- Claude: primary implementation engineer when connected to the repository. Read the project state and this protocol before coding. Implement only the assigned task, on the specified branch. Report exact files, commit SHA, commands run, test output, and unresolved issues.
- Either tool may implement a task if it is demonstrably faster or more reliable. Do not duplicate the same implementation in parallel. One owner per task; the other reviews.
- If a capability is unavailable, state the limitation and use the best available alternative. Never pretend to control an external app or account.

## Session and token discipline
- One session = one bounded objective, ideally one feature or one risk.
- Start with a compact handoff: current branch/commit, relevant files, current status, exact objective, acceptance criteria, and known constraints.
- Read only the files and tool outputs relevant to the task. Avoid re-reading the whole repository or repeating broad audits unless the task requires it.
- Do not paste large logs or whole files into chat. Summarize relevant excerpts and retain detailed evidence in GitHub docs/PRs.
- Do not re-explain the product vision in every session. Refer to this protocol and PROJECT_STATE.
- Before ending, write a concise handoff: completed, commit/PR, checks and results, remaining risks, next single task.
- If context is running low, stop at a safe checkpoint, update the handoff, and continue in a fresh session. Never rush a risky change to fit a session.

## Engineering workflow
1. Read PROJECT_STATE and this protocol; inspect current branch and working tree.
2. Confirm one task and measurable acceptance criteria.
3. Create/use a focused feature branch from the agreed canonical base. Never work directly on `main`.
4. Inspect relevant code and dependencies before changing architecture.
5. Implement the smallest complete vertical slice, including UI, server logic, persistence, authorization, and tests where applicable.
6. Run relevant checks: typecheck, lint, unit/integration tests, build, and security checks. Record actual commands and outcomes. Do not report a check that was not run.
7. Review the diff for regressions, secrets, accessibility, responsive behavior, and authorization bypasses.
8. Open/update a PR with scope, screenshots or preview URL when available, test evidence, migration notes, and risks.
9. Do not merge, deploy to production, alter production data, rotate credentials, or perform destructive actions without explicit user approval.
10. Update PROJECT_STATE and this session handoff after meaningful milestones.

## Quality gates
- A page that renders is not necessarily a working feature.
- Demo/static data must be clearly labelled and must never masquerade as real user data.
- UI-only role hiding is not authorization. Enforce access server-side and with Supabase RLS.
- Test both allowed and denied access for every privileged operation.
- Never expose service-role keys, Telegram bot tokens, or secrets in client code, logs, commits, or chat.
- For minors, minimize personal data and implement guardian consent and privacy controls.
- Validate keyboard use, contrast, mobile layouts, loading, empty, error, and success states.
- No feature is complete until acceptance criteria and relevant tests pass, and the preview is reviewed.

## Communication rules
- Be concise and factual. Lead with the result or blocker.
- Separate VERIFIED FACT, INFERENCE, and NOT VERIFIED.
- If blocked, name the exact missing permission, tool, input, or dependency and the smallest action needed.
- Never invent progress, test results, deployment status, data, or URLs.
- Do not praise a weak result. Explain the defect and the fix.
- Do not ask broad questions. Ask only for a decision that genuinely blocks safe progress.

## Task brief template
- Objective:
- Base branch and starting commit:
- Relevant files/services:
- Scope (in):
- Out of scope:
- Acceptance criteria:
- Security/privacy constraints:
- Required checks:
- Approval needed before:

## Session handoff template
- Date:
- Objective:
- Branch and starting commit:
- Changes and commit SHA:
- Files changed:
- Checks actually run and exact results:
- Preview/PR:
- Database or infrastructure changes:
- Verified outcome:
- Open risks/blockers:
- Next single task:
