<?php

namespace App\Filament\Table\Resources\Indicators;

use App\Filament\Table\Resources\Indicators\Pages\CreateIndicator;
use App\Filament\Table\Resources\Indicators\Pages\EditIndicator;
use App\Filament\Table\Resources\Indicators\Pages\ListIndicators;
use App\Filament\Table\Resources\Indicators\Pages\ViewIndicator;
use App\Filament\Table\Resources\Indicators\Schemas\IndicatorForm;
use App\Filament\Table\Resources\Indicators\Schemas\IndicatorInfolist;
use App\Filament\Table\Resources\Indicators\Tables\IndicatorsTable;
use App\Models\Indicator;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use LaraZeus\SpatieTranslatable\Resources\Concerns\Translatable;


class IndicatorResource extends Resource
{
    protected static ?string $model = Indicator::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedClipboardDocumentCheck;

    protected static ?string $recordTitleAttribute = 'short_name';

    use Translatable;

    public static function getNavigationLabel(): string
    {
        return 'Prüfkriterien';
    }    

    public static function form(Schema $schema): Schema
    {
        return IndicatorForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return IndicatorInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return IndicatorsTable::configure($table);
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
            'index' => ListIndicators::route('/'),
            'view' => ViewIndicator::route('/{record}'),
        ];
    }
    public static function getNavigationBadge(): ?string
    {
        return (string) static::$model::count();
    }
    public static function canCreate(): bool
    {
        return false;
    }    
}
