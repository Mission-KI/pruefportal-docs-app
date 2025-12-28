<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        DB::table('users')->insert([
            'name'=> 'test',
            'email' => 'phihes@gmail.com',
            'password' => Hash::make('test!123')
        ]);

        //DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        $this->call([
            // use excel files for seeding
            CustomExcelFileSeeder::class          
            //DimensionSeeder::class
            /*
            // do manual seeding
            DimensionSeeder::class,
            CanAutomateSeeder::class,
            DataRequirementSeeder::class,
            DimensionSeeder::class,
            ComplexitySeeder::class,
            ModelAccessRequirementSeeder::class,
            ResultComplexitySeeder::class,
            TaskSeeder::class
            */
        ]);    
        
        //DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        
    }
}
