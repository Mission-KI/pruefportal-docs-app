<?php

namespace App\Filament\Table\Resources\Entries\Pages;

use App\Filament\Table\Resources\Entries\EntryResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;
use Illuminate\Support\Facades\Blade;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\HtmlString;

class ViewEntry extends ViewRecord
{
    protected static string $resource = EntryResource::class;

    protected function getHeaderActions(): array
    {
        return [
        ];
    }
    public function getBreadcrumbs(): array
    {
        return [
            new HtmlString("<a href='../'>Artikel</a></span>"),
            $this->record->name
        ];
    }
    public function getTitle(): string
    {
        return " ";
    }    
}
