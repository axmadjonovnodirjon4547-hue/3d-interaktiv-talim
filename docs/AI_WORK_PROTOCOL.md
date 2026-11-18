# AI Work Protocol — 3D Interaktiv Ta'lim

Last updated: 2026-11-18

## Mission
Deliver a production-grade, secure education platform for grades 1–11. Optimize for verified working outcomes, not activity, promises, or long reports.

## User's standing instructions
- Address the user respectfully as "Boss" or "janob"; communicate primarily in Uzbek.
- Be concise and direct. No airy claims, motivational filler, or long explanations.
- Use critical thinking. Challenge incorrect assumptions and explain why; do not agree merely to please.
- State capability limits honestly. If knowledge is insufficient, research current reliable sources or consult Claude/another suitable tool.
- Choose the fastest reliable method that achieves high quality. Delegate to Claude when it is better suited, and independently verify the result where possible.
- Prioritize substantial, working outcomes over plans and status talk. Never claim work is done until it is actually completed and checked.
- Organize work into bounded sessions and preserve handoff notes so the user does not need to repeat instructions or project context.
- Minimize token use: reuse project documents, inspect only relevant files, avoid duplicate audits and repeated explanations.
- Do not delete, reset, overwrite, merge, or change production resources without explicit approval.

## Source of truth
- Read `docs/PROJECT_STATE.md` at the start of every session.
- GitHub is the source of truth for code and decisions. Supabase is the source of truth for persisted application data. Vercel is the source of truth for deployments. Figma is the source of truth for approved visual design.
- Re-check live state before relying on old notes. Mark stale or uncertain facts as NOT VERIFIED.
- Never ask the user to repeat information already present in these files or the connected project.

## Product safety, security, and operational requirements
These are mandatory acceptance requirements, not optional future polish.

### Account, identity, and access security
- Protect the Founder as the highest-privilege owner. No other role may demote, replace, disable, or delete the Founder. Enforce this in trusted server logic and database constraints/policies, not only in the interface.
- Use strong authentication and secure account recovery for privileged accounts; require multi-factor authentication for Founder and privileged administrators where supported.
- Enforce role-based and scope-based authorization on the server and through Supabase RLS. Test both permitted and forbidden actions for every role.
- Prevent privilege escalation, insecure direct object references, account takeover, session theft, CSRF, XSS, SQL injection, mass assignment, rate-limit bypass, and abuse of public endpoints.
- Validate Telegram authentication payloads server-side with the bot token kept only in server-side secrets. A Telegram username or unverified phone number alone is not identity proof. Use short-lived, single-use nonces where applicable; protect against replay.
- Never expose service-role keys, bot tokens, signing keys, passwords, or other secrets in client bundles, source control, logs, screenshots, or chat.
- Apply least privilege to database, storage, integrations, deployment access, and team roles. Keep privileged actions auditable.

### Student and child safety / privacy
- The platform serves minors. Collect only data needed for education; restrict access to student profiles, grades, guardian contacts, and activity records.
- Implement guardian consent where required for minors, and define consent state, withdrawal, retention, export, and deletion workflows consistent with applicable law.
- Prevent students from accessing other students' personal data or private teacher/admin information.
- Provide safe reporting/moderation paths for student-teacher communication. Define who can view, respond to, escalate, and close reports.
- Do not expose private student information in leaderboards, analytics, logs, or public pages.

### Learning content quality, AI, and copyright
- Lessons must align with the real curriculum and relevant textbooks; verify scientific accuracy, age suitability, answer correctness, and consistency with the source textbook.
- AI-generated lessons or materials must never be published directly to children without teacher or methodologist review and approval.
- Keep review status, reviewer identity, approval timestamp, content version, and change history for publishable learning materials.
- Check copyright ownership and digital-use permissions before uploading, distributing, or making books/materials downloadable. Do not assume that an uploaded file is licensed for redistribution.
- Interactive simulations must use scientifically valid models and parameters; controls must work, changes must update the simulation correctly, and collisions or physically impossible states must be prevented where relevant.
- Support phone, computer, and other common device sizes. Verify usability and performance on mobile as well as desktop.
- Uploaded learning materials should support approved book/file formats, with file validation, size limits, malware scanning where available, access control, and safe download handling.

### Data, resilience, and operational safety
- Back up database and critical files on a defined schedule; restrict backup access and protect backups from accidental or malicious deletion.
- Test restoration, not just backup creation. Document recovery steps and recovery objectives before onboarding real students.
- Use separate development, preview/staging, and production environments. Never test destructive migrations or experimental features against production.
- Use reviewed database migrations, rollback plans, monitoring, error reporting, and deployment checks.
- Maintain audit trails for role changes, privileged actions, content approvals, data exports/deletions, and security events. Never log secrets or unnecessary child data.
- Define incident response for suspected account compromise, data exposure, malicious uploads, and service outages.
- Apply rate limits, abuse prevention, input validation, secure headers, dependency/security scanning, and timely patching.
- Do not claim compliance, security, backup readiness, or disaster recovery until the relevant controls have been implemented and tested.

### Required security and quality verification
- Threat-model each major module before release: assets, trust boundaries, attacker goals, abuse cases, mitigations, and residual risks.
- Test authentication, authorization, RLS, storage policies, file upload/download, rate limits, input validation, and privileged role changes.
- Include automated tests for critical access rules and regression tests for previously found vulnerabilities.
- Review dependency alerts and security scan findings; document accepted risks with owner and rationale.
- A successful build or deployment alone is not proof of security or functional correctness. Record actual test evidence and unresolved risks in the PR and project handoff.

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
