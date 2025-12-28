# Mission KI Documentation App

A documentation management system for AI quality standards, built as part of the [MISSION KI](https://mission-ki.de) initiative — a German government-funded project to promote responsible AI development.

| | |
|---|---|
| **Stack** | Laravel 11 · Vue 3 · Filament · PostgreSQL |
| **Status** | Pre-production (active development) |
| **License** | [MIT](LICENSE) |

## What This App Does

- Manages structured documentation for AI quality assessment criteria
- Provides an admin panel (Filament) for content editors
- Serves documentation via a Vue 3 + Inertia.js frontend

## Prerequisites

- **Docker Desktop** (v20+) with Docker Compose v2
- **Git**
- 4GB+ available RAM for containers
- macOS, Linux, or Windows with WSL2

All other dependencies (PHP 8.4, Node 22, Composer) run inside Docker.

## Quick Start

```bash
make start
```

Access the app at **http://localhost:8071**

Database: `localhost:5643` (user: `portal_user`, password: `portal_password`)

### Seeding the Database

```bash
make seed-fresh  # WARNING: Deletes all data, runs migrations, then seeds
```

### Admin Login

After seeding, an admin user is created. Configure credentials in `.env` before seeding:

```bash
SEED_ADMIN_EMAIL=admin@example.test
SEED_ADMIN_PASSWORD=your-password-here
```

If `SEED_ADMIN_PASSWORD` is not set, a random 32-character password is generated (check the seeder output or reset with a known password).

## Common Commands

See all commands: `make help`

| Command | Description |
|---------|-------------|
| `make start` | Start the development environment |
| `make stop` | Stop all containers |
| `make logs` | View application logs |
| `make shell` | Open bash shell in app container |
| `make migrate` | Run database migrations |
| `make seed` | Run database seeders (keeps existing data) |
| `make seed-fresh` | Reset database and run seeders |
| `make npm-dev` | Start Vite dev server with hot reload |

## Development Workflow

**Backend changes**: Edit files directly, changes reflect immediately

**Frontend changes**: Run `make npm-dev` for hot reload

**Database changes**: Create migration, run `make migrate`

## Stack

- **Backend**: Laravel 11 + PHP 8.4
- **Frontend**: Vue 3 + Vite + Inertia.js + Tailwind CSS
- **Admin Panel**: Filament 4
- **Database**: PostgreSQL
- **Port**: 8071

## Project Structure

```
app/
├── Filament/           # Admin panel resources
│   ├── Resources/      # Protected admin CRUD (requires auth)
│   └── Table/          # Public documentation panel
├── Models/             # Eloquent models
└── Providers/          # Service providers

database/
├── migrations/         # Database migrations
└── seeders/            # Database seeders

resources/
├── js/                 # Vue components
└── views/              # Blade templates
```

## Health Check

The application provides a health check endpoint at `/health` that returns:

```json
{
  "status": "healthy",
  "app": "docs-app",
  "timestamp": "2025-10-30T12:00:00+00:00",
  "database": "connected"
}
```

## Environment Configuration

Copy `.env.example` to `.env` for local development. Key settings:

| Variable | Description |
|----------|-------------|
| `APP_DEBUG` | Set to `false` in production |
| `APP_KEY` | Generate with `php artisan key:generate` |
| `DB_*` | Database connection settings |
| `SEED_ADMIN_EMAIL` | Optional: Admin user email for seeding |
| `SEED_ADMIN_PASSWORD` | Optional: Admin user password for seeding |

## Documentation

- [Filament Docs](https://filamentphp.com/docs)
- [Laravel Docs](https://laravel.com/docs)
- [Inertia.js Docs](https://inertiajs.com)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines and [CONTRIBUTORS.md](CONTRIBUTORS.md) for the list of contributors.

## License

This project is licensed under the [MIT License](LICENSE).
