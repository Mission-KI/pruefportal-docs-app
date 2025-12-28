<?php

namespace App\Filament\Resources\Methods\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;
use Illuminate\Database\Eloquent\Builder;

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
                    ->relationship('task', 'name', modifyQueryUsing: fn(Builder $query) => $query->orderByRaw("name->>'de'"))
                    ->default(null),
                Select::make('data_requirement_id')
                    ->relationship(
                        'dataRequirement',
                        'name',
                        modifyQueryUsing: fn(Builder $query) => $query->orderByRaw("name->>'de'")
                    )
                    ->default(null),
                Select::make('model_access_requirement_id')
                    ->relationship(
                        'modelAccessRequirement',
                        'name',
                        modifyQueryUsing: fn(Builder $query) => $query->orderByRaw("name->>'de'")
                    )
                    ->default(null),
                Select::make('result_complexity_id')
                    ->relationship('resultComplexity', 'name', modifyQueryUsing: fn(Builder $query) => $query->orderByRaw("name->>'de'"))
                    ->default(null),
                Select::make('can_automate_id')
                    ->relationship('canAutomate', 'name', modifyQueryUsing: fn(Builder $query) => $query->orderByRaw("name->>'de'"))
                    ->default(null),
                Select::make('complexity_id')
                    ->relationship('complexity', 'name', modifyQueryUsing: fn(Builder $query) => $query->orderByRaw("name->>'de'"))
                    ->default(null),
            ]);
    }
}
