#!/bin/bash

# Portal Docker Environment Reset Script
#
# This script performs a complete reset of the development environment:
# - Stops all running containers
# - Removes all Docker volumes (database data, vendor dependencies, node_modules)
# - Rebuilds Docker images from scratch
# - Starts the environment with start.sh
#
# WARNING: This will delete all database data!

set -e  # Exit on error

# Display what will happen
echo "=============================================="
echo "   Portal Docker Environment Reset"
echo "=============================================="
echo ""
echo "This script will:"
echo "  1. Stop all running containers"
echo "  2. Remove containers and networks"
echo "  3. Delete volumes (portal_postgres_data, portal_vendor, portal_node_modules)"
echo "  4. Rebuild Docker images (no cache)"
echo "  5. Start environment with ./start.sh"
echo ""
echo "⚠️  WARNING: All database data will be lost!"
echo ""

# Ask for confirmation
read -p "Are you sure you want to continue? (yes/no): " confirmation
echo ""

if [[ ! "$confirmation" =~ ^[Yy][Ee][Ss]$ ]]; then
  echo "Reset cancelled."
  exit 0
fi

# Step 1: Stop containers
echo "[1/5] Stopping containers..."
docker compose -f docker-compose.dev.yml down
echo "✓ Containers stopped"
echo ""

# Step 2: Remove volumes
echo "[2/5] Removing volumes..."
docker volume rm portal_postgres_data 2>/dev/null || echo "  (portal_postgres_data not found, skipped)"
docker volume rm portal_vendor 2>/dev/null || echo "  (portal_vendor not found, skipped)"
docker volume rm portal_node_modules 2>/dev/null || echo "  (portal_node_modules not found, skipped)"
echo "✓ Volumes removed"
echo ""

# Step 3: Rebuild images
echo "[3/5] Rebuilding Docker images (this may take a few minutes)..."
docker compose -f docker-compose.dev.yml build --no-cache
echo "✓ Images rebuilt"
echo ""

# Step 4: Start environment
echo "[4/5] Starting environment..."
./start.sh
echo ""

# Step 5: Done
echo "[5/5] Reset complete!"
echo ""
echo "=============================================="
echo "   Environment reset successful!"
echo "=============================================="
echo ""
echo "The application should now be running at:"
echo "  http://localhost:8071"
echo ""