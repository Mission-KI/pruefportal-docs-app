#!/bin/bash
set -euo pipefail

echo "Starting the database and the portal server with docker..."

if [ ! -f .env ]; then
    if [ -f .env.example ]; then
        echo "Creating .env from .env.example..."
        cp .env.example .env
        echo ".env file created."
    else
        echo "Warning: No .env or .env.example file found!"
    fi
fi

docker compose -f docker-compose.dev.yml up -d

# Wait until the Postgres container is up and running
DB_CONTAINER="portal-db"
echo "Waiting for database container ($DB_CONTAINER) to become healthy..."
for i in {1..60}; do
  STATUS=$(docker inspect -f '{{.State.Health.Status}}' "$DB_CONTAINER" 2>/dev/null || echo "unknown")
  if [ "$STATUS" = "healthy" ]; then
    echo "Database is healthy."
    break
  fi
  if [ "$STATUS" = "unhealthy" ]; then
    echo "Database container reported unhealthy status." >&2
    exit 1
  fi
  sleep 1
  if [ "$i" -eq 60 ]; then
    echo "Timed out waiting for database health check." >&2
    exit 1
  fi
done

echo "Ensuring composer dependencies are installed..."
docker compose -f docker-compose.dev.yml exec -T -w /app app sh -c '[ -f vendor/autoload.php ] || composer install --no-interaction --prefer-dist'

echo "Ensuring Node.js dependencies are installed..."
docker compose -f docker-compose.dev.yml exec -T -w /app app sh -c '[ -d node_modules ] || npm ci --include=optional'

echo "Checking Laravel application key..."
if ! docker compose -f docker-compose.dev.yml exec -T -w /app app sh -c 'grep -q "APP_KEY=base64:" .env' 2>/dev/null; then
  echo "Generating application key..."
  docker compose -f docker-compose.dev.yml exec -T -w /app app php artisan key:generate
  echo "Application key generated."
else
  echo "Application key already set."
fi

echo "Running database migrations..."
docker compose -f docker-compose.dev.yml exec -T -w /app app php artisan migrate --force
echo "Migrations completed."

echo "Building frontend assets..."
docker compose -f docker-compose.dev.yml exec -T -w /app app npm run build
echo "Assets built."

echo "Creating storage symlink..."
docker compose -f docker-compose.dev.yml exec -T -w /app app php artisan storage:link 2>/dev/null || echo "Storage symlink already exists."

echo "All services started!"
echo "Application running at: http://localhost:8071"
echo "Database running on port: 5643"
