@echo off
echo Stopping the database and the portal server...
docker compose -f docker-compose.dev.yml down
echo Services stopped.