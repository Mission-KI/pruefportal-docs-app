# Mission KI Documentation App

Laravel 11 + Vue 3 + Filament admin panel for MISSION KI quality standard documentation.

## Quick Start

```bash
cd docs-app
make start
```

Access the app at **http://localhost:8071**

Database: `localhost:5643` (user: `portal_user`, password: `portal_password`)

### Seeding the database

```bash
make seed-fresh  # WARNING: Deletes all data, runs migrations, then seeds
```

## Common Commands

See all commands: `make help`

## Development Workflow

**Backend changes**: Edit files directly, changes reflect immediately

**Frontend changes**: Run `make npm-dev` for hot reload

**Database changes**: Create migration, run `make migrate`

## Database Management

**Seeding (without reset)**:
```bash
make seed  # Adds seed data to existing database
```

**Fresh database with seeds**:
```bash
make seed-fresh  # Deletes all data, runs migrations, then seeds
# Or directly:
./seed-db.sh
```

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         EC2 Instance                         │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                    Nginx (Port 80/443)                  │ │
│  │                   SSL Termination + Routing             │ │
│  └─────────┬──────────────────────────────────┬───────────┘ │
│            │                                   │             │
│            ▼                                   ▼             │
│  ┌──────────────────┐              ┌──────────────────────┐ │
│  │   Backend App    │              │    Docs-App          │ │
│  │   (CakePHP)      │              │    (Laravel + Vue)   │ │
│  │   Port: 8070     │              │    Port: 8071        │ │
│  └────────┬─────────┘              └──────────┬───────────┘ │
│           │                                    │             │
│           └────────────┬───────────────────────┘             │
│                        ▼                                     │
└────────────────────────────────────────────────────────────┘
                         │
                         ▼
         ┌────────────────────────────────┐
         │   AWS RDS PostgreSQL           │
         │   ┌──────────┐  ┌────────────┐ │
         │   │pruefportal│ │pruefportal_│ │
         │   │           │  │docs        │ │
         │   └──────────┘  └────────────┘ │
         └────────────────────────────────┘
```

## Stack

**Backend**: Laravel 11 + PHP 8.4
**Frontend**: Vue 3 + Vite + Inertia.js + Tailwind CSS + Filament
**Database**: PostgreSQL (separate `pruefportal_docs` database on shared RDS)
**Port**: 8071
**ECR Tag**: `docs-latest`, `docs-<sha>`
**URL**: https://docs.pruefportal.mission-ki.de

## Deployment

### GitHub Actions Workflow

**Workflow**: `.github/workflows/deploy-docs-prod.yml`

**Trigger**:
1. Go to GitHub Actions → "Deploy Docs-App to Production ECR"
2. Click "Run workflow"
3. Type `deploy-docs-production` to confirm

**Process**:
1. **Build (~20 min)**: Multi-stage Docker build (Node.js for Vite + PHP runtime)
2. **Push to ECR**: Tags `docs-latest` and `docs-<sha>`
3. **Deploy (~2 min)**: SSH to server, pull image, restart docs-app service only
4. **Post-deploy**: Run migrations, clear Laravel caches

### Docker Compose Service

```yaml
docs-app:
  image: 723609008698.dkr.ecr.eu-central-1.amazonaws.com/pruefportal:docs-latest
  network_mode: "host"
  env_file: .env.docs
  restart: unless-stopped
  healthcheck:
    test: ["CMD", "curl", "-f", "http://localhost:8071/health"]
```

**Deploy Script**: `server/prod/deploy-docs.sh`
- Pulls `docs-app` image only
- Restarts docs-app service without affecting nginx or backend
- Runs Laravel migrations and clears caches

### Health Check Endpoint

**Endpoint**: https://docs.pruefportal.mission-ki.de/health

**Response**:
```json
{
  "status": "healthy",
  "app": "docs-app",
  "timestamp": "2025-10-30T12:00:00+00:00",
  "database": "connected"
}
```

## Configuration

### Environment Variables

**File**: `~/config/.env.docs` (on server)

Key variables:
```bash
APP_KEY=base64:xxxxx  # Generate: php artisan key:generate --show
APP_ENV=production
APP_DEBUG=false
APP_URL=https://docs.pruefportal.mission-ki.de
ASSET_URL=https://docs.pruefportal.mission-ki.de

DB_CONNECTION=pgsql
DB_HOST=<rds-endpoint>
DB_PORT=5432
DB_DATABASE=pruefportal_docs
DB_USERNAME=pruefportal_prod_user
DB_PASSWORD=<password>
```

### Nginx Routing

**Subdomain**: `docs.pruefportal.mission-ki.de`
- SSL termination with Let's Encrypt
- HTTP Basic Auth (except `/health`)
- WebSocket support for Livewire/Inertia
- Optimized for Filament file uploads

**Server Block**:
- `/health` → Health check (no auth)
- `/` → Laravel application (with auth)

## Database Reset Behavior (Pre-Production)

**Current State**: Automated database reset runs after each deployment.

**What Happens**:
1. Standard deployment runs `migrate --force`
2. Separate step runs `deploy-docs-seed-db.sh`
3. Database completely reset using `migrate:fresh --seed`
4. All tables dropped and recreated from migrations
5. Seeders populate initial data

**Impact**: All existing docs-app data is lost on every deployment.

**Rationale**: Ensures migration integrity during pre-production development.

**Future**: Database reset will be removed before production launch.

## Troubleshooting

### Common Issues

**ECR Login Failures**
```bash
# Check AWS credentials
aws sts get-caller-identity

# Manual ECR login
aws ecr get-login-password --region eu-central-1 | \
  docker login --username AWS --password-stdin \
  723609008698.dkr.ecr.eu-central-1.amazonaws.com/pruefportal
```

**Health Check Failures**
```bash
# Check container status
docker compose ps docs-app

# View logs
docker compose logs docs-app --tail=100

# Test from inside container
docker compose exec docs-app curl http://localhost:8071/health
```

**Database Connection Errors**
```bash
# Verify environment variables
docker compose exec docs-app env | grep DB_

# Test database connection
docker compose exec docs-app php artisan tinker
> DB::connection()->getPdo();
```

**Database Permission Errors**

Symptom: `permission denied for schema public` or `relation "sessions" does not exist`

Solution:
```sql
-- Connect as RDS master user
psql -h <rds-endpoint> -U postgres -d pruefportal_docs

-- Grant schema permissions
GRANT USAGE, CREATE ON SCHEMA public TO pruefportal_prod_user;
ALTER SCHEMA public OWNER TO pruefportal_prod_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO pruefportal_prod_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO pruefportal_prod_user;

\q
```

Then run migrations:
```bash
docker compose exec docs-app php artisan migrate --force
```

**Migration Failures**
```bash
# Check status
docker compose exec docs-app php artisan migrate:status

# Run with verbose output
docker compose exec docs-app php artisan migrate --verbose
```

### Debug Scripts

**Local**: Use `reset.sh` for complete local environment reset
**Server**: Use `server/prod/debug-docs-app-deployment.sh` for server issues

## Rollback Procedure

```bash
# SSH to server
cd ~/deployment

# Pull previous version
docker pull 723609008698.dkr.ecr.eu-central-1.amazonaws.com/pruefportal:docs-<previous-sha>

# Update docker-compose.yml tag
sed -i 's/:docs-latest/:docs-<previous-sha>/g' docker-compose.yml

# Restart service
docker compose up -d docs-app --no-deps
```

## Verification

```bash
# Check services
docker compose ps

# View logs
docker compose logs docs-app --tail=50

# Test health endpoints
curl http://localhost:8071/health
curl https://docs.pruefportal.mission-ki.de/health
```

## Documentation

- [Filament Docs](https://filamentphp.com/docs)
- [Laravel Docs](https://laravel.com/docs)
- [Inertia.js Docs](https://inertiajs.com)
- Project guidance: `CLAUDE.md`
- Backend development: `backend/docs/developer.md`
