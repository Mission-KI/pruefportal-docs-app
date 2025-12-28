<?php

namespace App\Filament\Resources\Criteria\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class CriterionForm
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
                TextInput::make('dimension_id')
                    ->numeric(),
            ]);
    }
}
