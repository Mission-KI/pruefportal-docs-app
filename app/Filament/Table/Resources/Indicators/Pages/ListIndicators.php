<?php

namespace App\Filament\Table\Resources\Indicators\Pages;

use App\Filament\Table\Resources\Indicators\IndicatorResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListIndicators extends ListRecords
{
    protected static string $resource = IndicatorResource::class;
    protected static ?string $title = 'Prüfkriterien: Indikatoren';
    protected static ?string $navigationLabel = 'Prüfkriterien';
    protected static ?string $slug = 'pruefkriterien';
    protected ?string $subheading = "In dieser Tabelle sind alle Indikatoren der Prüfkriterien des MISSION KI Qualitätsstandard und ihre Zuordnung zu Qualitätsdimensionen aufgelistet.";

    protected function getHeaderActions(): array
    {
        return [
        ];
    }

    public static function getNavigationLabel(): string
    {
        return 'Prüfkriterien des MISSION KI Qualitätsstandards';
    }
    public function getBreadcrumbs(): array
    {
        return [];
    }
    protected function getHeaderWidgets(): array
    {
        return [
            \App\Filament\Widgets\VCIOStruktur::class,
        ];
    }
}
