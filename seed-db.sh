#!/usr/bin/env bash
set -euo pipefail

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "================================================"
echo "  🗄️  DOCS-APP LOCAL DATABASE RESET & SEED"
echo "  Working directory: $SCRIPT_DIR"
echo "================================================"
echo ""

# Check if app container is running
if ! docker compose -f docker-compose.dev.yml ps app | grep -q "Up"; then
    echo "❌ ERROR: app container is not running"
    echo "Please start the docs-app first using ./start.sh"
    exit 1
fi

echo "== Waiting for app container to be ready..."
# Ensure container is fully ready
for i in {1..30}; do
    if docker compose -f docker-compose.dev.yml exec -T app sh -c 'echo "Container ready"' >/dev/null 2>&1; then
        echo "✓ App container is ready after ${i} seconds"
        break
    fi
    if [ "$i" -eq 30 ]; then
        echo "❌ Timeout waiting for app container to be ready"
        echo "Container status:"
        docker compose -f docker-compose.dev.yml ps app
        exit 1
    fi
    sleep 1
done

echo ""
echo "⚠️  WARNING: This will RESET the database and DELETE all data!"
echo "Press Ctrl+C within 5 seconds to cancel..."
sleep 5

echo ""
echo "== Resetting database (running fresh migrations)..."
if docker compose -f docker-compose.dev.yml exec -T app php artisan migrate:fresh --force; then
    echo "✓ Database reset successful"
else
    echo "❌ Database reset failed!"
    exit 1
fi

echo ""
echo "== Running database seeders..."
if docker compose -f docker-compose.dev.yml exec -T app php artisan db:seed --force; then
    echo "✓ Database seeding successful"
else
    echo "⚠️ Database seeding failed or no seeders configured"
    echo "This may be expected if no seeders exist yet"
fi

echo ""
echo "== Clearing application caches after database reset..."
docker compose -f docker-compose.dev.yml exec -T app php artisan config:cache
docker compose -f docker-compose.dev.yml exec -T app php artisan route:cache
docker compose -f docker-compose.dev.yml exec -T app php artisan view:cache

echo ""
echo "== Verifying database connection..."
if docker compose -f docker-compose.dev.yml exec -T app php artisan db:show 2>/dev/null; then
    echo "✓ Database connection verified"
else
    echo "⚠️ Could not verify database (db:show may not be available)"
fi

echo ""
echo "================================================"
echo "  ✅ Database Reset & Seed Complete!"
echo "================================================"
echo ""
echo "Database has been reset with fresh migrations and seeded."
echo "All previous data has been removed."
echo ""
echo "Application running at: http://localhost:8071"
echo ""
