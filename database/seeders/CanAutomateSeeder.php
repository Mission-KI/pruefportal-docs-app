<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CanAutomate;

class CanAutomateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CanAutomate::create(
            ['name' => ['en' => 'Yes', 'de' => 'Ja'], 'description' => '']
        );
        CanAutomate::create(
            ['name' => ['en' => 'No', 'de' => 'Nein'], 'description' => '']
        );
        CanAutomate::create(
            ['name' => ['en' => 'Most likely', 'de' => 'Wahrscheinlich'], 'description' => '']
        );
    }
}
