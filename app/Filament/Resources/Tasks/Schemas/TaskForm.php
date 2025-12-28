<?php

namespace App\Filament\Resources\Tasks\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class TaskForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Textarea::make('name')
                    ->required()
                    ->default('{}')
                    ->columnSpanFull(),
                Textarea::make('description')
                    ->required()
                    ->default('{}')
                    ->columnSpanFull(),
            ]);
    }
}
