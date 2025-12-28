<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Task::create(
            ['name' => 'agnostisch', 'description' => ''
        ])->setTranslation('name', 'en', 'agnostic')
          ->setTranslation('description', 'en', '');
          
        Task::create(
            ['name' => 'Klassifizierung', 'description' => ''
        ])->setTranslation('name', 'en', 'Classification')
          ->setTranslation('description', 'en', '');
          
        Task::create(
            ['name' => 'Regression', 'description' => ''
        ])->setTranslation('name', 'en', 'Regression')
          ->setTranslation('description', 'en', ''); 
          
        Task::create(
            ['name' => 'Clustering', 'description' => ''
        ])->setTranslation('name', 'en', 'Clustering')
          ->setTranslation('description', 'en', '');
          
        Task::create(
            ['name' => 'Erkennung', 'description' => ''
        ])->setTranslation('name', 'en', 'Detection')
          ->setTranslation('description', 'en', '');
          
        Task::create(
            ['name' => 'Segmentierung', 'description' => ''
        ])->setTranslation('name', 'en', 'Segmentation')
          ->setTranslation('description', 'en', '');
          
        Task::create(
            ['name' => 'GenAI', 'description' => ''
        ])->setTranslation('name', 'en', 'GenAI')
          ->setTranslation('description', 'en', '');
          
        Task::create(
            ['name' => 'Audio', 'description' => ''
        ])->setTranslation('name', 'en', 'Audio')
          ->setTranslation('description', 'en', '');           
    }
}
