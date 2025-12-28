<?php

namespace App\Filament\Table\Resources\Entries\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;


class EntryInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Grid::make()
                    ->columnSpanFull()
                    ->schema([
                    Section::make('')
                        ->schema([
                            TextEntry::make('content')
                                ->markdown()
                                ->hiddenLabel()
                        ])
                        ->columnSpanFull()
                ])
            ]);
    }
}
