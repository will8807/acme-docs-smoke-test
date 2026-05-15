# Authentication Guide

Acme uses API tokens for all programmatic access.

## Generating a Token

1. Log in at <https://app.acme.io>.
2. Navigate to **Settings → API Tokens**.
3. Click **New Token** and give it a descriptive name.
4. Copy the token — it will not be shown again.

## Using the Token

Include the token as a Bearer credential in every request:

```http
GET /v1/projects HTTP/1.1
Authorization: Bearer acme_tok_XXXXXXXXXXXXXXXXXXXX
```

## Token Scopes

| Scope | Access |
|-------|--------|
| `read` | Read-only access to all resources |
| `write` | Create and update resources |
| `admin` | Full access including deletion |

## Revoking a Token

Tokens can be revoked at any time from **Settings → API Tokens**.
