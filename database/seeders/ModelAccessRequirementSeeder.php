<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ModelAccessRequirement;

class ModelAccessRequirementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        ModelAccessRequirement::create(
            ['name' => 'Inferenzzugang', 'description' => ''
        ])->setTranslation('name', 'en', 'inference')
          ->setTranslation('description', 'en', '');

        ModelAccessRequirement::create(
            ['name' => 'Modellausgaben auf Testdaten', 'description' => ''
        ])->setTranslation('name', 'en', 'model results for test data')
          ->setTranslation('description', 'en', '');
          
        ModelAccessRequirement::create(
            ['name' => 'modellunabhängig', 'description' => ''
        ])->setTranslation('name', 'en', 'does not rely on model')
          ->setTranslation('description', 'en', '');
          
        ModelAccessRequirement::create(
            ['name' => 'vollständiger Modellzugang', 'description' => ''
        ])->setTranslation('name', 'en', 'complete access to model')
          ->setTranslation('description', 'en', '');          
    }
}
