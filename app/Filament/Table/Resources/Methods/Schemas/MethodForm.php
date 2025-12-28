<?php

namespace App\Filament\Table\Resources\Methods\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class MethodForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Textarea::make('name')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('implementation')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('reference')
                    ->required()
                    ->columnSpanFull(),
                Select::make('task_id')
                    ->relationship('task', 'name')
                    ->default(null),
                Select::make('data_requirement_id')
                    ->relationship('dataRequirement', 'name')
                    ->default(null),
                Select::make('model_access_requirement_id')
                    ->relationship('modelAccessRequirement', 'name')
                    ->default(null),
                Select::make('result_complexity_id')
                    ->relationship('resultComplexity', 'name')
                    ->default(null),
                Select::make('can_automate_id')
                    ->relationship('canAutomate', 'name')
                    ->default(null),
                Select::make('complexity_id')
                    ->relationship('complexity', 'name')
                    ->default(null),
            ]);
    }
}
