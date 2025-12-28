<?php

namespace App\Filament\Table\Resources\Methods;

use App\Filament\Table\Resources\Methods\Pages\ListMethods;
use App\Filament\Table\Resources\Methods\Pages\ViewMethod;
use App\Filament\Table\Resources\Methods\Schemas\MethodForm;
use App\Filament\Table\Resources\Methods\Schemas\MethodInfolist;
use App\Filament\Table\Resources\Methods\Tables\MethodsTable;
use App\Models\Method;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use LaraZeus\SpatieTranslatable\Resources\Concerns\Translatable;


class MethodResource extends Resource
{
    use Translatable;
    protected static ?string $model = Method::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedWrench;

    protected static ?string $recordTitleAttribute = 'name';

    public static function getNavigationLabel(): string
    {
        return 'Prüfmethoden';
    }

    public static function form(Schema $schema): Schema
    {
        return MethodForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return MethodInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return MethodsTable::configure($table);
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
            'index' => ListMethods::route('/'),
            'view' => ViewMethod::route('/{record}'),
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) static::$model::count();
    }    
}
