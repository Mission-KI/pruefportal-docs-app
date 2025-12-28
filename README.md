# Mission KI Documentation App

Laravel 11 + Vue 3 + Filament admin panel for MISSION KI quality standard documentation.

## Quick Start

```bash
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

See [CONTRIBUTORS.md](CONTRIBUTORS.md) for the list of contributors.

## License

This project is part of the [MISSION KI](https://mission-ki.de) initiative.
