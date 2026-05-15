# Acme Docs

> **v2.0** — Now with real-time collaboration and improved CLI performance.

Welcome to the **Acme** documentation hub. This repository contains the complete product
documentation for the Acme platform, covering getting-started guides, the full API reference,
architecture deep-dives, and migration guides.

## Quick Start

```bash
npm install @acme/sdk@latest
acme auth login --browser
acme project create my-project
acme dev
```

## Structure

| Path | Contents |
|------|----------|
| `docs/` | Core reference docs |
| `guides/` | Step-by-step tutorials |
| `assets/` | Images and diagrams |
| `CHANGELOG.md` | Release history |

## What''s New in v2

- Real-time collaboration on shared projects
- `acme dev` replaces `acme start` with hot-reload support
- Token scopes are now enforced at the endpoint level
- Rate limits raised to 1 000 req/min for paid tiers

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b docs/my-edit`.
3. Run `acme docs lint` to validate your Markdown.
4. Commit your changes and open a pull request targeting `main`.

---
_Last updated: 2026-05-15_
