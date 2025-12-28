<?php

namespace App\Filament\Table\Resources\Methods\Pages;

use App\Filament\Table\Resources\Methods\MethodResource;
use Filament\Resources\Pages\ListRecords;
use LaraZeus\SpatieTranslatable\Resources\Pages\ListRecords\Concerns\Translatable;


class ListMethods extends ListRecords
{
    use Translatable;
    protected static string $resource = MethodResource::class;
    protected static ?string $title = 'Prüfmethoden';
    protected static ?string $navigationLabel = 'Prüfmethoden';
    protected static ?string $slug = 'pruefmethoden';
    protected ?string $subheading = "Diese Tabelle gibt einen Überblick über verschiedene technische Prüfmethoden, mit denen die Qualität von KI-Systemen überprüft werden kann. Sie zeigt, für welche Qualitätskriterien eine Methode geeignet ist und welche Nachweise sich damit erbringen lassen. Jede Methode ist kurz beschrieben und mit dem MISSION KI Qualitätsstandard verknüpft.";

    public static function getNavigationLabel(): string
    {
        return 'Prüfmethoden';
    }

    protected function getHeaderActions(): array
    {
        return [
            #LocaleSwitcher::make(),
        ];
    }
    public function getBreadcrumbs(): array
    {
        return [];
    }
    protected function getHeaderWidgets(): array
    {
        return [
            \App\Filament\Widgets\PruefmethodenTaxonomie::class,
        ];
    }    

    
}
