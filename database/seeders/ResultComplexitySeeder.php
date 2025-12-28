<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ResultComplexity;

class ResultComplexitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ResultComplexity::create(
            ['name' => 'Reelle Zahl(en)', 'description' => ''
        ])->setTranslation('name', 'en', 'real number(s)')
          ->setTranslation('description', 'en', '');
          
        ResultComplexity::create(
            ['name' => 'Komplexe Ergebnisse', 'description' => ''
        ])->setTranslation('name', 'en', 'complex results')
          ->setTranslation('description', 'en', '');           
    }
}
