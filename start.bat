@echo off
setlocal enabledelayedexpansion

echo Starting the database and the portal server with docker...

REM Check for .env file
if not exist .env (
    if exist .env.example (
        echo Creating .env from .env.example...
        copy .env.example .env
        echo .env file created.
    ) else (
        echo Warning: No .env or .env.example file found!
    )
)

docker compose -f docker-compose.dev.yml up -d

REM Wait until the Postgres container is up and running
set DB_CONTAINER=portal-db
echo Waiting for database container (%DB_CONTAINER%) to become healthy...

for /L %%i in (1,1,60) do (
    for /f "delims=" %%a in ('docker inspect -f "{{.State.Health.Status}}" %DB_CONTAINER% 2^>nul') do set STATUS=%%a
    if "!STATUS!"=="healthy" (
        echo Database is healthy.
        goto :db_ready
    )
    if "!STATUS!"=="unhealthy" (
        echo Database container reported unhealthy status.
        exit /b 1
    )
    timeout /t 1 /nobreak >nul
    if %%i==60 (
        echo Timed out waiting for database health check.
        exit /b 1
    )
)

:db_ready

echo Ensuring composer dependencies are installed...
docker compose -f docker-compose.dev.yml exec -T app sh -c "cd /app && [ -f vendor/autoload.php ] || composer install --no-interaction --prefer-dist"

echo Ensuring Node.js dependencies are installed...
docker compose -f docker-compose.dev.yml exec -T app sh -c "cd /app && [ -d node_modules ] || npm ci --include=optional"

echo Checking Laravel application key...
docker compose -f docker-compose.dev.yml exec -T app sh -c "cd /app && grep -q 'APP_KEY=base64:' .env" 2>nul
if errorlevel 1 (
    echo Generating application key...
    docker compose -f docker-compose.dev.yml exec -T app sh -c "cd /app && php artisan key:generate"
    echo Application key generated.
) else (
    echo Application key already set.
)

echo Running database migrations...
docker compose -f docker-compose.dev.yml exec -T app sh -c "cd /app && php artisan migrate --force"
echo Migrations completed.

echo Building frontend assets...
docker compose -f docker-compose.dev.yml exec -T app sh -c "cd /app && npm run build"
echo Assets built.

echo Creating storage symlink...
docker compose -f docker-compose.dev.yml exec -T app sh -c "cd /app && php artisan storage:link" 2>nul || echo Storage symlink already exists.

echo.
echo All services started!
echo Application running at: http://localhost:8071
echo Database running on port: 5643