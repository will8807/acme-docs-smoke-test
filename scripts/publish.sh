#!/usr/bin/env bash
set -euo pipefail

ENVIRONMENT=${1:-staging}
REGISTRY="registry.acme.example"
IMAGE="$REGISTRY/acme-docs"
TAG=$(git rev-parse --short HEAD)
BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "Building docs site for environment: $ENVIRONMENT"
echo "Branch: $BRANCH  Commit: $TAG"
echo "Image: $IMAGE:$TAG"

# Run full quality checks before building
npm run typecheck
npm run lint
npm run test

# Build the Next.js app
npm run build

# Build and push the Docker image
docker build \
  --build-arg BUILD_ID="$TAG" \
  --build-arg BUILD_DATE="$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  -t "$IMAGE:$TAG" \
  -t "$IMAGE:$BRANCH" \
  .
docker push "$IMAGE:$TAG"
docker push "$IMAGE:$BRANCH"

if [[ "$ENVIRONMENT" == "production" ]]; then
  docker tag "$IMAGE:$TAG" "$IMAGE:stable"
  docker push "$IMAGE:stable"
fi

# Deploy to the target environment
NAMESPACE="$ENVIRONMENT"
echo "Deploying to $NAMESPACE…"
kubectl set image deployment/acme-docs app="$IMAGE:$TAG" --namespace "$NAMESPACE"
kubectl rollout status deployment/acme-docs --namespace "$NAMESPACE" --timeout=120s

# Notify Slack
if [[ -n "${SLACK_WEBHOOK_URL:-}" ]]; then
  curl -s -X POST "$SLACK_WEBHOOK_URL" \
    -H 'Content-Type: application/json' \
    -d "{\"text\":\"acme-docs \`$TAG\` deployed to *$ENVIRONMENT* ✅\"}"
fi

echo "Deployment complete: $IMAGE:$TAG → $ENVIRONMENT"
