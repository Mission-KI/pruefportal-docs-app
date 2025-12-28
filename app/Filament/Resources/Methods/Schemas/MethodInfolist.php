<?php

namespace App\Filament\Resources\Methods\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class MethodInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('name'),
                TextEntry::make('task.name'),
                TextEntry::make('dataRequirement.name'),
                TextEntry::make('modelAccessRequirement.name'),
                TextEntry::make('resultComplexity.name'),
                TextEntry::make('canAutomate.name'),
                TextEntry::make('complexity.name'),
            ]);
    }
}
