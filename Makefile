.PHONY: help start stop seed seed-fresh logs shell migrate npm-dev

help: ## Show this help message
	@echo "Available commands:"
	@echo ""
	@echo "  make start        - Start the docs-app environment"
	@echo "  make stop         - Stop all containers"
	@echo "  make logs         - View app container logs"
	@echo "  make shell        - Open bash shell in app container"
	@echo "  make migrate      - Run database migrations"
	@echo "  make seed         - Run database seeders (keeps existing data)"
	@echo "  make seed-fresh   - Reset database and run seeders (WARNING: deletes all data)"
	@echo "  make npm-dev      - Start Vite dev server with hot reload"
	@echo ""

start: ## Start the docs-app environment
	bash start.sh

stop: ## Stop all containers
	bash stop.sh

logs: ## View app container logs
	docker compose -f docker-compose.dev.yml logs -f app

shell: ## Open bash shell in app container
	docker compose -f docker-compose.dev.yml exec app bash

migrate: ## Run database migrations
	docker compose -f docker-compose.dev.yml exec -w /app app php artisan migrate

seed: ## Run database seeders (keeps existing data)
	docker compose -f docker-compose.dev.yml exec -w /app app php artisan db:seed

seed-fresh: ## Reset database and run seeders (WARNING: deletes all data)
	bash seed-db.sh

npm-dev: ## Start Vite dev server with hot reload
	docker compose -f docker-compose.dev.yml exec -w /app app npm run dev
