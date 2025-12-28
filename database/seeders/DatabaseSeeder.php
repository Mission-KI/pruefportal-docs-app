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

        // Create default admin user for development/seeding
        // In production, set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD environment variables
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => env('SEED_ADMIN_EMAIL', 'admin@example.test'),
            'password' => Hash::make(env('SEED_ADMIN_PASSWORD', Str::random(32))),
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
