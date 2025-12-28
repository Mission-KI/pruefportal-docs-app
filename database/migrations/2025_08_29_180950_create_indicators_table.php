<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('indicators', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->json('short_name')->default('{}');
            $table->json('a')->default('{}');
            $table->json('b')->default('{}');
            $table->json('c')->default('{}');
            $table->json('d')->default('{}');
            $table->json('requirement')->default('{}');
            $table->json('additional_info')->default('{}');
            $table->json('reference')->default('{}');
            $table->json('type')->default('{}');
            $table->json('weighting')->default('{}');
            $table->json('links')->default('{}');
            $table->foreignId('criterion_id')
                ->nullable()
                ->nullOnDelete()
                ->constrained();
            $table->foreignId('dimension_id')
                ->nullable()
                ->nullOnDelete()
                ->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('indicators');
    }
};
