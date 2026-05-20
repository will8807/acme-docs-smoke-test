# Dashboard Tour

This guide introduces the redesigned Acme 2.0 dashboard and its key sections.

## Overview

The Acme 2.0 dashboard gives you a unified workspace to manage projects,
monitor real-time metrics, and collaborate with your team.

![Acme Dashboard v2](../assets/hero.png)

The dashboard is organised into four primary areas:

- **Projects panel** — lists all your active projects with live health checks
- **API usage** — shows request volume, latency percentiles, and error rate
- **Team activity** — a feed of recent deployments, key rotations, and comments
- **Quick actions** — shortcuts to create a project, rotate keys, or open a review

## Navigation

Use the top navigation bar to switch between workspaces and the sidebar for
section-level navigation:

| Section       | Description                              |
|---------------|------------------------------------------|
| Projects      | Manage, deploy, and compare revisions    |
| API Keys      | Create, scope, and revoke credentials    |
| Logs          | Stream and search recent request logs    |
| Reviews       | Collaborative doc review sessions        |
| Settings      | Account, billing, and SSO configuration |

## Status Indicators

Each project card shows a colour-coded status badge:

- **Green** — running normally
- **Yellow** — degraded, scaling, or pending deployment
- **Red** — stopped, error state, or quota exceeded
- **Blue** — paused by the team

## Next Steps

Once you are familiar with the dashboard, continue to
[Authentication](authentication.md) to configure SSO and API access for your team.
