<?php

namespace App\Filament\Resources\Dimensions\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class DimensionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('short_name')
                    ->required()
                    ->default('{}'),
                TextInput::make('name')
                    ->required()
                    ->default('{}'),
            ]);
    }
}
