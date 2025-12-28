<?php

namespace App\Filament\Resources\Methods\Pages;

use App\Filament\Resources\Methods\MethodResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;
use LaraZeus\SpatieTranslatable\Resources\Pages\ViewRecord\Concerns\Translatable;
use LaraZeus\SpatieTranslatable\Actions\LocaleSwitcher;

class ViewMethod extends ViewRecord
{


    protected static string $resource = MethodResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make()
        ];
    }
}
