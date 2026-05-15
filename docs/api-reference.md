# API Reference

Base URL: `https://api.acme.io/v1`

All requests require an `Authorization: Bearer <token>` header.

## Endpoints

### GET /projects

Returns a list of all projects in your account.

**Response**

```json
{
  "projects": [
    { "id": "proj_abc", "name": "My Project", "createdAt": "2026-01-15T09:00:00Z" }
  ]
}
```

### POST /projects

Creates a new project.

**Body**

```json
{ "name": "string", "description": "string?" }
```

**Response** — `201 Created`

```json
{ "id": "proj_xyz", "name": "My Project", "createdAt": "2026-05-01T12:00:00Z" }
```

### DELETE /projects/:id

Permanently deletes a project and all its data.

**Response** — `204 No Content`

## Error Codes

| Code | Meaning |
|------|---------|
| 400 | Invalid request body |
| 401 | Missing or invalid token |
| 404 | Resource not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
