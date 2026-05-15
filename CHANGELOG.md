# Changelog

All notable changes to Acme are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/).

## [2.0.0] - 2026-05-15

### Added
- Real-time collaboration via WebSockets
- `acme dev` command with hot-reload support
- `GET /projects/:id/members` endpoint
- Pagination on `GET /projects`
- Browser-based OAuth flow (`acme auth login --browser`)

### Changed
- Base API URL updated from `/v1` to `/v2`
- Node.js minimum version raised from 18 to 20
- `acme start` replaced by `acme dev`
- Rate limit for paid tiers raised to 1 000 req/min

### Deprecated
- `@acme/sdk` versions below `2.0.0` — will reach end-of-life 2026-12-31

### Fixed
- Token scope validation now enforced at endpoint level (was advisory only)
- Hot-reload did not trigger on `acme.config.json` changes

## [1.0.0] - 2026-01-15

- Initial release
