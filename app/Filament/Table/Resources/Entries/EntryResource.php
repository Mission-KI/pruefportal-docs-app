<?php

namespace App\Filament\Table\Resources\Entries;

use App\Filament\Table\Resources\Entries\Pages\ListEntries;
use App\Filament\Table\Resources\Entries\Pages\ViewEntry;
use App\Filament\Table\Resources\Entries\Schemas\EntryForm;
use App\Filament\Table\Resources\Entries\Schemas\EntryInfolist;
use App\Filament\Table\Resources\Entries\Tables\EntriesTable;
use App\Models\Entry;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class EntryResource extends Resource
{
    protected static ?string $model = Entry::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedDocumentDuplicate;

    protected static ?string $recordTitleAttribute = 'name';

    public static function getNavigationLabel(): string
    {
        return 'Artikel';
    }    

    public static function form(Schema $schema): Schema
    {
        return EntryForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return EntryInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return EntriesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListEntries::route('/'),
            'view' => ViewEntry::route('/{record}'),
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }

}
