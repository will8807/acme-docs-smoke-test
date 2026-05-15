# Getting Started

This guide walks you through setting up Acme for the first time.

## Prerequisites

- Node.js 20 or later (Node 18 is deprecated)
- An Acme account — [sign up free](https://app.acme.io/register)
- Git 2.40+

## Installation

Install the CLI globally:

```bash
npm install -g @acme/sdk@latest
```

Verify the installation:

```bash
acme --version
# 2.0.0
```

## Authentication

Log in with browser-based OAuth (recommended):

```bash
acme auth login --browser
```

Or use a token directly:

```bash
acme auth login --token acme_tok_XXXX
```

## Creating Your First Project

```bash
acme project create my-project
cd my-project
acme dev
```

Open your browser at `http://localhost:3000` to see your project running.
The dev server supports **hot reload** — changes to your config are applied instantly.

## Next Steps

- Read the [API Reference](api-reference.md) for a full list of endpoints.
- Explore [Configuration](configuration.md) to customise your setup.
- Check the [Authentication Guide](../guides/authentication.md) for token management.
