# 3D Interaktiv Ta'lim — Project State

Last verified: 2026-11-18
Purpose: durable handoff context for new Claude and ChatGPT sessions. Update this file after each meaningful milestone.

## Product vision
Build a secure, maintainable, responsive education platform for grades 1–11, with web first and mobile apps later.
- Grades 1–4: age-appropriate 3D/cartoon visual language, friendly characters, animation and interactive learning.
- Grades 5–11: premium, modern scientific/educational visual language.
- Lessons should progressively support video/motion explanations, interactive simulations, exercises, tests and progress tracking.

## Required user roles
- Founder/Owner: ultimate platform owner. Can appoint/remove admins and super admins. No other role can change, demote or remove the Founder.
- Super Admin
- Admin
- Teacher
- Student
- Parent/Guardian
- School Admin
- District Admin
- Region Admin

Role permissions must be enforced server-side and by database policies, never only by hiding UI elements.

## Required product areas
1. Student registration and profile: first/last name, phone, region, district/city, school, grade (1–11), guardian phone and appropriate guardian consent for minors. Profile is completed once and reused on later logins.
2. Student dashboard: grade/subjects, topics, lessons, videos, exercises, tests, books, ask-teacher, answers/history, grades/results, achievements and learning history.
3. Library: authorized PDF/EPUB and other approved learning materials, upload and metadata (subject, grade, topic), controlled reading/download access.
4. Teacher dashboard: profile, subjects/classes, lesson and test creation, video/book uploads, question inbox, student progress.
5. Admin dashboard: scoped user/teacher/class/content management, moderation, reports and complaints.
6. Super Admin dashboard: admin/region/school management within delegated scope, global reporting, settings, audit/security.
7. Founder dashboard: full platform oversight, role assignment/removal, schools/regions, content, analytics, security, audit and backup/recovery controls.
8. Student-teacher Q&A: threaded questions, teacher responses, status, moderation and notifications.
9. Authentication: user selected Telegram-based verification. Telegram identity/auth data must be verified server-side; a username or unverified phone number is not proof of identity. Never expose bot token or service-role keys in client code.
10. Content/learning: lessons, tests, interactive simulations, progress and reward validation on the server.

## Connected services / project identifiers
- GitHub repository: axmadjonovnodirjon4547-hue/3d-interaktiv-talim
- Vercel project: 3d-interaktiv-talim
- Vercel project ID: prj_dZwgANGpYszHjij6aD7LmHyh0bAD
- Supabase project ref: jtuflhaksjyvkajbnorg
- Supabase URL: https://jtuflhaksjyvkajbnorg.supabase.co
- Figma file: https://www.figma.com/design/zEUwUBjQenG6uUnqDAuJdQ
- Production URL: https://3d-interaktiv-talim.vercel.app

## Verified technical state (2026-11-18)
- Next.js 14.2.15, React 18, TypeScript 5.7.2, lucide-react. package.json does not currently list Supabase client packages.
- Existing route tree includes home, one sample lesson (/dars/narsalarning-xossalari), student cabinet (/kabinet), and achievements (/yutuqlar).
- Current UI includes demo/static content; README says MVP has a student home/subject map, one grade-1 math lesson, and progress stored in browser localStorage.
- README explicitly states production auth, server/database-backed learner records, teacher/parent dashboards and AI API are not yet implemented.
- Current Supabase public tables: profiles, lessons, lesson_progress. RLS enabled on all three. Profiles currently has role and learner profile fields. Role values include student, teacher, parent, admin, super_admin, founder, school_admin, district_admin, region_admin.
- Existing Supabase schema is only a foundation. Do not assume role hierarchy enforcement, Telegram authentication, guardian consent, library, Q&A, or complete admin workflows exist until verified and tested.
- Supabase tables were empty at last inspection.
- GitHub PR #2: https://github.com/axmadjonovnodirjon4547-hue/3d-interaktiv-talim/pull/2
  - Title: Release: learning dashboard, gamification and security foundation
  - Head: feat/auth-foundation
  - Base: main
  - Not merged at last verification. Do not merge without review and passing checks.
- PR #2 includes Dependabot, quality/security workflows, SECURITY.md, development workflow documentation, security headers, lesson UI changes, cabinet/home/achievements demo UI.
- CI status observed for commit 17229ac9f09595206638af2ad68676fd54a4c36a: Vercel check success. A successful Vercel check is not by itself proof of full functional QA.
- Keep production and preview separate. Use feature branches and pull requests. Do not write directly to main.

## Known implementation gaps (verify before changing)
- No production-grade authentication flow confirmed.
- No Telegram verification implementation confirmed.
- No complete role-based dashboards for teacher/admin/super-admin/founder.
- No library upload/management workflow confirmed.
- No student-teacher Q&A workflow confirmed.
- No full database-backed student progress confirmed; current MVP README describes localStorage progress.
- No real 3D engine integration confirmed; README lists Three.js/React Three Fiber as future work.
- Current demo leaderboard/profile values must not be presented as real student records.

## Security and privacy rules
- Never commit .env files, bot tokens, Supabase service-role keys, passwords or signing secrets.
- Keep service-role credentials server-only. Use least privilege.
- Enable and test RLS on every exposed table and storage bucket.
- Validate all user input and authorize every protected operation server-side.
- Founder protection must be enforced by trusted server/database logic and immutable safeguards, not UI.
- For minors, minimize personal data, obtain appropriate guardian consent, and define retention/deletion controls.
- Keep audit logs for privileged actions without logging secrets or unnecessary student data.
- Back up production data and test restoration before onboarding real students.
- Do not change production data or settings without explicit approval.

## Working protocol for every new session
Read `docs/AI_WORK_PROTOCOL.md` for the full ChatGPT/Claude collaboration, token-discipline, engineering, and handoff rules.
1. Read this file first and inspect current GitHub branches, PRs, CI/deploy status, and relevant database state.
2. Confirm the active branch and exact task before editing.
3. Work in a focused feature branch. Never commit directly to main.
4. One logical change per commit; explain files changed and why.
5. Run typecheck, lint (if configured), build, and relevant tests. Report commands and actual results; do not claim tests passed if not run.
6. Open/update a PR. Review preview deployment and desktop/mobile behavior before merge.
7. Never merge or deploy to production without explicit user approval.
8. At the end of each session, update this file with completed work, commits/PRs, test results, open issues and next steps.
9. If a fact is unknown, mark it "not verified" rather than guessing.

## Current next steps
1. Finish independent audit of PR #2 and compare with Claude's read-only audit.
2. Agree on role/permission matrix and route map before building dashboards.
3. Create a secure authentication and profile lifecycle design, including Telegram verification and guardian consent.
4. Design the platform-wide UI system and responsive layouts for each role.
5. Implement modules incrementally: auth/profile, student learning, library, Q&A, teacher tools, scoped admin, founder controls.
6. Add automated tests and verify each module in Vercel Preview before production release.

## Session handoff template
- Date:
- Session/task:
- Branch:
- Changes/commits:
- Tests actually run and results:
- Preview/deployment:
- Database changes:
- Open risks/issues:
- Next exact task:
