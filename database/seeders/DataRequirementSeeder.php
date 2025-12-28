<?php

namespace Database\Seeders;

use App\Models\DataRequirement;
use Illuminate\Database\Seeder;

class DataRequirementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DataRequirement::create(
            ['name' => 'Benchmarkdatensatz', 'description' => ''
        ])->setTranslation('name', 'en', 'benchmark data set')
          ->setTranslation('description', 'en', '');

        DataRequirement::create(
            ['name' => 'Ganzer vorhandener Datensatz', 'description' => ''
        ])->setTranslation('name', 'en', 'complete data set')
          ->setTranslation('description', 'en', '');
          
        DataRequirement::create(
            ['name' => 'Modellausgaben mit Ground Truth', 'description' => ''
        ])->setTranslation('name', 'en', 'model results with ground truth')
          ->setTranslation('description', 'en', ''); 
          
        DataRequirement::create(
            ['name' => 'Modellausgaben mit Ground Truth und augmentierten oder neuen Eingabedaten', 'description' => ''
        ])->setTranslation('name', 'en', 'model results with ground truth and new or augmented input data')
          ->setTranslation('description', 'en', ''); 
          
        DataRequirement::create(
            ['name' => 'Modellausgaben mit Ground Truth und Eingabedaten', 'description' => ''
        ])->setTranslation('name', 'en', 'model results with ground truth and input data')
          ->setTranslation('description', 'en', ''); 
          
        DataRequirement::create(
            ['name' => 'Zur Nutzung benötigte (Eingabe-) Daten', 'description' => ''
        ])->setTranslation('name', 'en', '(input-) data needed for method usage')
          ->setTranslation('description', 'en', ''); 
    }
}
