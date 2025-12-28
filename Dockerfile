FROM php:8.4.10-cli

# Install system dependencies including Node.js for building frontend assets
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpq-dev \
    libicu-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    curl \
    && docker-php-ext-configure intl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_pgsql intl zip gd \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:2.8.9 /usr/bin/composer /usr/local/bin/composer

# Set working directory
WORKDIR /app

# Copy composer files for dependency resolution
COPY composer.json composer.lock* ./

# Install PHP dependencies including dev dependencies for development
# Use --no-scripts since artisan file is not available yet
RUN composer install --no-scripts --optimize-autoloader

# Copy package.json and package-lock.json for npm dependencies
COPY package*.json ./

# Install npm dependencies (omit devDependencies like test tools)
RUN npm ci --omit=dev

# Copy the rest of the application (excluding vendor and node_modules via .dockerignore)
COPY . .

# Create minimal .env if it doesn't exist (needed for artisan commands)
RUN if [ ! -f .env ]; then cp .env.example .env 2>/dev/null || true; fi

# Run composer scripts now that artisan is available
RUN composer run-script post-autoload-dump --no-interaction || true

# Set proper permissions for Laravel
RUN chown -R www-data:www-data /app/storage /app/bootstrap/cache || true \
    && chmod -R 775 /app/storage /app/bootstrap/cache || true

# Expose ports
EXPOSE 8071 5173

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:8071/health || exit 1

# Start PHP built-in server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8071"]
