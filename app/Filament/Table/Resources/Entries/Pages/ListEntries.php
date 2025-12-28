<?php

namespace App\Filament\Table\Resources\Entries\Pages;

use App\Filament\Table\Resources\Entries\EntryResource;
use Filament\Resources\Pages\ListRecords;

class ListEntries extends ListRecords
{
    protected static string $resource = EntryResource::class;
    protected ?string $subheading = "In dieser Übersicht finden Sie Hilfeartikel und Hintergrundinformationen zum MISSION KI Qualitätsstandard und seinen Anwendungselementen. Die Beiträge erläutern zentrale Begriffe, Schritte im Prüfverfahren und praktische Hinweise zur Nutzung der begleitenden Vorlagen und Tabellen.";

    protected function getHeaderActions(): array
    {
        return [
        ];
    }
    public function getBreadcrumbs(): array
    {
        return [];
    }
    public function getTitle(): string
    {
        return "Artikel";
    }    
}
