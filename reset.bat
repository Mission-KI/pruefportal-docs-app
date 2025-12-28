@echo off
setlocal enabledelayedexpansion

REM Portal Docker Environment Reset Script
REM
REM This script performs a complete reset of the development environment:
REM - Stops all running containers
REM - Removes all Docker volumes (database data, vendor dependencies, node_modules)
REM - Rebuilds Docker images from scratch
REM - Starts the environment with start.bat
REM
REM WARNING: This will delete all database data!

echo ==============================================
echo    Portal Docker Environment Reset
echo ==============================================
echo.
echo This script will:
echo   1. Stop all running containers
echo   2. Remove containers and networks
echo   3. Delete volumes (portal_postgres_data, portal_vendor, portal_node_modules)
echo   4. Rebuild Docker images (no cache)
echo   5. Start environment with start.bat
echo.
echo WARNING: All database data will be lost!
echo.

REM Ask for confirmation
set /p confirmation="Are you sure you want to continue? (yes/no): "
echo.

if /i not "%confirmation%"=="yes" (
    echo Reset cancelled.
    exit /b 0
)

REM Step 1: Stop containers
echo [1/5] Stopping containers...
docker compose -f docker-compose.dev.yml down
echo OK Containers stopped
echo.

REM Step 2: Remove volumes
echo [2/5] Removing volumes...
docker volume rm portal_postgres_data 2>nul || echo   (portal_postgres_data not found, skipped)
docker volume rm portal_vendor 2>nul || echo   (portal_vendor not found, skipped)
docker volume rm portal_node_modules 2>nul || echo   (portal_node_modules not found, skipped)
echo OK Volumes removed
echo.

REM Step 3: Rebuild images
echo [3/5] Rebuilding Docker images (this may take a few minutes)...
docker compose -f docker-compose.dev.yml build --no-cache
echo OK Images rebuilt
echo.

REM Step 4: Start environment
echo [4/5] Starting environment...
call start.bat
echo.

REM Step 5: Done
echo [5/5] Reset complete!
echo.
echo ==============================================
echo    Environment reset successful!
echo ==============================================
echo.
echo The application should now be running at:
echo   http://localhost:8071
echo.