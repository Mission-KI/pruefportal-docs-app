<?php

namespace App\Filament\Resources\Methods\Pages;

use App\Filament\Resources\Methods\MethodResource;
use Filament\Resources\Pages\CreateRecord;
use LaraZeus\SpatieTranslatable\Resources\Pages\CreateRecord\Concerns\Translatable;
use LaraZeus\SpatieTranslatable\Actions\LocaleSwitcher;

class CreateMethod extends CreateRecord
{
    use Translatable;
    protected static string $resource = MethodResource::class;
    protected function getHeaderActions(): array
    {
        return [
            LocaleSwitcher::make(),
        ];
    }    
}
