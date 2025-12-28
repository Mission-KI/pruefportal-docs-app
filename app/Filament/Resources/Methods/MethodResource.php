<?php

namespace App\Filament\Resources\Methods;

use App\Filament\Resources\Methods\Pages\CreateMethod;
use App\Filament\Resources\Methods\Pages\EditMethod;
use App\Filament\Resources\Methods\Pages\ListMethods;
use App\Filament\Resources\Methods\Pages\ViewMethod;
use App\Filament\Resources\Methods\Schemas\MethodForm;
use App\Filament\Resources\Methods\Schemas\MethodInfolist;
use App\Filament\Resources\Methods\Tables\MethodsTable;
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

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'name';

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
            'create' => CreateMethod::route('/create'),
            'view' => ViewMethod::route('/{record}'),
            'edit' => EditMethod::route('/{record}/edit'),
        ];
    }
}
