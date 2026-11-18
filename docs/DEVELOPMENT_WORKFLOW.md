# Development and update workflow

This project is updated continuously. Do not make unreviewed changes directly on `main`.

## Change lifecycle
1. Create a focused branch from the latest stable branch.
2. Make one logical change per commit.
3. Run the local checks: `npm ci`, `npx tsc --noEmit`, and `npm run build`.
4. Open or update a pull request. Vercel Preview is the review environment.
5. Check desktop and mobile layouts, primary interactions, console/build errors, and accessibility basics.
6. Merge only after checks pass and the change is reviewed.
7. Production deploys from the protected stable branch. If a regression appears, revert the specific commit or roll back the Vercel deployment.

## Configuration-first changes
- Gamification reward values, level thresholds, medal definitions, and current demo leaderboard records live in `src/config/gamification.ts`.
- Keep presentation in route components and styles; keep changeable product rules in configuration or future database tables.
- Demo leaderboard and profile values are placeholders, not real student records.
- Never put secrets, API keys, or private student information in client-side configuration.

## Before each release
- Verify the preview URL and deployment state.
- Test the affected route on desktop and a narrow mobile viewport.
- Verify navigation, language switching, lesson completion, progress persistence, and any changed gamification controls.
- Confirm that no demo values are presented as live school data.
- Keep production separate from feature previews.

## Current limitations
The current gamification page is a UI prototype. Real accounts, server-side points ledger, anti-cheat validation, persistent rankings, and admin configuration require an authenticated backend before launch.
