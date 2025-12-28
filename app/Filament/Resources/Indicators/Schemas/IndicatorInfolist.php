<?php

namespace App\Filament\Resources\Indicators\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class IndicatorInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('created_at')
                    ->dateTime(),
                TextEntry::make('updated_at')
                    ->dateTime(),
                TextEntry::make('criterion_id')
                    ->numeric(),
                TextEntry::make('dimension_id')
                    ->numeric(),
            ]);
    }
}
