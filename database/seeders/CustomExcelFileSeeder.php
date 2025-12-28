<?php

namespace Database\Seeders;

use bfinlay\SpreadsheetSeeder\SpreadsheetSeeder;
use bfinlay\SpreadsheetSeeder\Readers\Types\EmptyCell;


class CustomExcelFileSeeder extends SpreadsheetSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function settings($set)
    {

        $j = function ($value) {
            if ($value instanceof EmptyCell) {
                return json_encode([]);
            } else {
                return json_encode(['de' => $value, 'en' => $value]);
            }
        };
        // By default, the seeder will process all XLSX files in /database/seeds/*.xlsx (relative to Laravel project base path)

        // Example setting
        //$set->worksheetTableMapping = ['Sheet1' => 'first_table', 'Sheet2' => 'second_table'];
        $set->parsers = [
            'name' => $j,
            'short_name' => $j,
            'requirement' => $j,
            'a' => $j,
            'b' => $j,
            'c' => $j,
            'd' => $j,
            'additional_info' => $j,
            'type' => $j,
            'tools' => $j,
            'weighting' => $j,
            'links' => $j,
            'description' => $j,
            'implementation' => $j,
            'reference' => $j

        ];
    }
}
