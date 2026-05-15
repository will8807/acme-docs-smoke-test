# API Reference

Base URL: `https://api.acme.io/v2`

All requests require an `Authorization: Bearer <token>` header.

## Endpoints

### GET /projects

Returns a paginated list of all projects in your account.

**Query Parameters**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | number | `1` | Page number |
| `limit` | number | `20` | Results per page (max 100) |

**Response**

```json
{
  "projects": [
    { "id": "proj_abc", "name": "My Project", "createdAt": "2026-01-15T09:00:00Z" }
  ],
  "total": 1,
  "page": 1
}
```

### POST /projects

Creates a new project.

**Body**

```json
{ "name": "string", "description": "string?", "visibility": "private|public" }
```

**Response** — `201 Created`

```json
{ "id": "proj_xyz", "name": "My Project", "createdAt": "2026-05-15T12:00:00Z" }
```

### GET /projects/:id/members

Returns all members with access to a project.

**Response**

```json
{
  "members": [
    { "userId": "usr_abc", "role": "admin", "joinedAt": "2026-01-01T00:00:00Z" }
  ]
}
```

### DELETE /projects/:id

Permanently deletes a project and all its data.

**Response** — `204 No Content`

## Error Codes

| Code | Meaning |
|------|---------|
| 400 | Invalid request body |
| 401 | Missing or invalid token |
| 403 | Insufficient token scope |
| 404 | Resource not found |
| 429 | Rate limit exceeded (retry after header included) |
| 500 | Internal server error |
