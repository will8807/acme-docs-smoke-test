# Configuration

Acme reads configuration from `acme.config.json` in your project root.

## Options

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `port` | number | `3000` | Dev server port |
| `outDir` | string | `"dist"` | Build output directory |
| `logLevel` | string | `"info"` | Logging verbosity (`debug`, `info`, `warn`, `error`) |
| `timeout` | number | `30000` | Request timeout in ms |

## Example

```json
{
  "port": 4000,
  "outDir": "build",
  "logLevel": "debug",
  "timeout": 10000
}
```

## Environment Variables

Any option can be overridden with a matching `ACME_` environment variable:

```bash
ACME_PORT=8080 acme start
```
