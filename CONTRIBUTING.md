# Contributing

Thank you for your interest in contributing to the Mission KI Documentation App!

## Development Setup

1. Fork and clone the repository
2. Copy `.env.example` to `.env`
3. Run `make start` to start the development environment
4. Run `make seed-fresh` to set up the database with sample data
5. Access the app at http://localhost:8071

## Before Submitting a PR

### Run the Linters

```bash
# PHP (Laravel Pint)
make shell
vendor/bin/pint

# JavaScript/Vue (ESLint + Prettier)
npm run lint
npm run format
```

### Run the Tests

```bash
make shell
./vendor/bin/pest
```

### Code Style

- **PHP**: Laravel Pint (PSR-12 based)
- **JavaScript/Vue**: Prettier + ESLint
- **Locale**: German (de) is the default for user-facing content

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes with clear, descriptive commits
3. Ensure all linting and tests pass
4. Open a PR against `main`
5. Describe what changes you made and why
6. Wait for CI checks to pass
7. Request review from maintainers

## Project Structure

```
app/
├── Filament/           # Admin panel resources (Filament 4)
│   ├── Resources/      # Protected admin CRUD
│   └── Table/          # Public documentation panel
├── Models/             # Eloquent models
└── Providers/          # Service providers

resources/
├── js/                 # Vue 3 components
└── views/              # Blade templates

database/
├── migrations/         # Database migrations
└── seeders/            # Database seeders (Excel-based)
```

## Key Technologies

- **Backend**: Laravel 11, PHP 8.4
- **Frontend**: Vue 3, Inertia.js, Tailwind CSS
- **Admin Panel**: Filament 4
- **Database**: PostgreSQL (SQLite for tests)
- **Build**: Vite

## Getting Help

If you have questions about contributing, please open an issue or reach out to the maintainers listed in [CONTRIBUTORS.md](CONTRIBUTORS.md).
