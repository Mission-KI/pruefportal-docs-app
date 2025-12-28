<?php

namespace App\Filament\Table\Resources\Methods\Pages;

use App\Filament\Table\Resources\Methods\MethodResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;
use LaraZeus\SpatieTranslatable\Resources\Pages\ViewRecord\Concerns\Translatable;
use LaraZeus\SpatieTranslatable\Actions\LocaleSwitcher;
use Illuminate\Support\Facades\Blade;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\HtmlString;

class ViewMethod extends ViewRecord
{
    use Translatable;

    protected static string $resource = MethodResource::class;

    protected function getHeaderActions(): array
    {
        return [
            #LocaleSwitcher::make(),
            #EditAction::make(),
            

        ];
    }

    public function getBreadcrumbs(): array
    {
        return [
            new HtmlString("<a href='/methods'>Prüfmethoden</a>"),
            $this->record->name
        ];
    }
    public function getTitle(): string
    {
        return " ";
    }
}