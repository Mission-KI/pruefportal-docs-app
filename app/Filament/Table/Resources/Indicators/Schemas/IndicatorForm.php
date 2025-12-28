<?php

namespace App\Filament\Table\Resources\Indicators\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class IndicatorForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('short_name')
                    ->required()
                    ->default('{}'),
                TextInput::make('a')
                    ->required()
                    ->default('{}'),
                TextInput::make('b')
                    ->required()
                    ->default('{}'),
                TextInput::make('c')
                    ->required()
                    ->default('{}'),
                TextInput::make('d')
                    ->required()
                    ->default('{}'),
                TextInput::make('requirement')
                    ->required()
                    ->default('{}'),
                TextInput::make('additional_info')
                    ->required()
                    ->default('{}'),
                TextInput::make('reference')
                    ->required()
                    ->default('{}'),
                TextInput::make('type')
                    ->required()
                    ->default('{}'),
                TextInput::make('weighting')
                    ->required()
                    ->default('{}'),
                TextInput::make('links')
                    ->required()
                    ->default('{}'),
                TextInput::make('criterion_id')
                    ->numeric(),
                TextInput::make('dimension_id')
                    ->numeric(),
            ]);
    }
}
