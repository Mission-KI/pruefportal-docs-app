<?php

namespace App\Filament\Table\Resources\Entries\Tables;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class EntriesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->sortable()
                    ->label('Artikel')
                    ->searchable(),
                TextColumn::make('description')
                    ->label('Beschreibung')
                    ->searchable()
            ])
            ->filters([
                //
            ])
            ->recordActions([
            ])
            ->toolbarActions([
            ]);
    }
}
