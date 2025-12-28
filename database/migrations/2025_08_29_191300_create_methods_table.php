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
        Schema::create('methods', function (Blueprint $table) {
            $table->id();
            $table->json('name')->default('{}');
            $table->json('description')->default('{}');
            $table->json('implementation')->default('{}');  
            $table->json('reference')->default('{}');
            $table->json('tools')->default('{}');
            $table->timestamps();

            // relationships
            $table->foreignId('task_id')
                ->nullable()
                ->nullOnDelete()
                ->constrained();
            $table->foreignId('data_requirement_id')
                ->nullable()
                ->nullOnDelete()
                ->constrained();
            $table->foreignId('model_access_requirement_id')
                ->nullable()
                ->nullOnDelete()
                ->constrained();
            $table->foreignId('result_complexity_id')
                ->nullable()
                ->nullOnDelete()
                ->constrained();
            $table->foreignId('can_automate_id')
                ->nullable()
                ->nullOnDelete()
                ->constrained();
            $table->foreignId('complexity_id')
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
        Schema::dropIfExists('methods');
    }
};
