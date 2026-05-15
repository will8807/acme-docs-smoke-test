# Getting Started

This guide walks you through setting up Acme for the first time.

## Prerequisites

- Node.js 18 or later
- An Acme account (free tier available)
- Git 2.30+

## Installation

Install the CLI globally:

```bash
npm install -g @acme/sdk
```

## Authentication

Log in with your Acme credentials:

```bash
acme login
```

You will be prompted for your email and password.

## Creating Your First Project

```bash
acme init my-project
cd my-project
acme start
```

Open your browser at `http://localhost:3000` to see your project running.

## Next Steps

- Read the [API Reference](api-reference.md) for a full list of endpoints.
- Explore [Configuration](configuration.md) to customise your setup.
