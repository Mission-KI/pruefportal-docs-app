<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Complexity;

class ComplexitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Complexity::create(
            [
                'name' => ['en' => 'basic method', 'de' => 'Basismethode'],
                'description' => ''
            ]
        );

        Complexity::create(
            [
                'name' => ['en' => 'Fortgeschrittene Methode', 'de' => 'advanced method'],
                'description' => ''
            ]
        );
    }
}
