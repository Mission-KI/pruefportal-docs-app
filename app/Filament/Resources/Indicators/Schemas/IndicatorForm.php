<?php

namespace App\Filament\Resources\Indicators\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Filament\Forms\Components\Textarea;


class IndicatorForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('short_name')
                    ->required(),
                TextArea::make('a')
                    ->required(),
                TextArea::make('b')
                    ->required(),
                TextArea::make('c')
                    ->required(),
                TextArea::make('d')
                    ->required(),
                TextArea::make('requirement')
                    ->required(),
                TextArea::make('additional_info')
                    ->required(),
                TextArea::make('reference')
                    ->required(),
                TextInput::make('type')
                    ->required(),
                TextInput::make('weighting')
                    ->required(),
                TextArea::make('links')
                    ->required(),
                TextInput::make('criterion_id')
                    ->numeric(),
                TextInput::make('dimension_id')
                    ->numeric(),
            ]);
    }
}
