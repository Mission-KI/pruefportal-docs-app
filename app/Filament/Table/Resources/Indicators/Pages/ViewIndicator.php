<?php

namespace App\Filament\Table\Resources\Indicators\Pages;

use App\Filament\Table\Resources\Indicators\IndicatorResource;
use Filament\Resources\Pages\ViewRecord;
use Illuminate\Support\HtmlString;


class ViewIndicator extends ViewRecord
{
    protected static string $resource = IndicatorResource::class;

    protected function getHeaderActions(): array
    {
        return [
        ];
    }
    public function getBreadcrumbs(): array
    {
        return [
            new HtmlString("<a href='/indicators'>Prüfkriterien</a>"),
            "Indikatoren",
            $this->record->short_name
        ];
    }
    public function getTitle(): string
    {
        return " ";
    }    
}
