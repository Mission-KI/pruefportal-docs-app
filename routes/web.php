<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

// Health check endpoint (no auth required)
Route::get('/health', function () {
    try {
        // Test database connection
        DB::connection()->getPdo();

        return response()->json([
            'status' => 'healthy',
            'app' => 'docs-app',
            'timestamp' => now()->toIso8601String(),
            'database' => 'connected'
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'unhealthy',
            'app' => 'docs-app',
            'timestamp' => now()->toIso8601String(),
            'database' => 'disconnected',
            'error' => $e->getMessage()
        ], 503);
    }
});

/*Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');*/

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
