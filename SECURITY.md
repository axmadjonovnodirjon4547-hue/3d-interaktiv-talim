# Security policy

## Reporting a vulnerability

Do not publish exploit details, credentials, student information, or personal data in a public issue. Report suspected vulnerabilities privately to the repository maintainers through GitHub's private vulnerability reporting feature, if enabled.

## Security baseline

- Keep production secrets in Vercel environment variables or the relevant secret manager. Never commit API keys, service-role keys, passwords, signing secrets, or private certificates.
- Treat all browser input as untrusted. Validate it on the server and authorize every protected operation on the server.
- When a database is introduced, enable row-level security on every exposed table and storage bucket. Default to deny; grant only the minimum role and row access required.
- Never expose database service-role credentials or privileged backend keys to browser/mobile bundles.
- Use short-lived sessions, secure HttpOnly cookies where applicable, session revocation, rate limits, and brute-force protections for authentication.
- Keep learner identity, grades, progress, and school data private. Collect only what the product needs and define retention and deletion rules.
- Keep audit records for privileged actions, role changes, score corrections, and administrative access. Do not log passwords, tokens, or sensitive learner data.
- Validate lesson completion and rewards on the server. Never trust stars, scores, ranks, or mission completion values submitted by a client.
- Back up production data and periodically test restoration before real learner data is stored.

## Automated checks

GitHub Actions runs dependency vulnerability auditing and CodeQL analysis. Dependabot checks npm and GitHub Actions dependencies weekly.

## Current implementation boundary

The project currently has no production authentication or database-backed learner records. These controls are a baseline and do not mean the application is already protected by login, database row-level security, anti-cheat validation, or backup/restore. Those controls must be implemented and tested when the backend is introduced.
