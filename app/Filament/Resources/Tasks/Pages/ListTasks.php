<?php

namespace App\Filament\Resources\Tasks\Pages;

use App\Filament\Resources\Tasks\TaskResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use LaraZeus\SpatieTranslatable\Resources\Pages\ListRecords\Concerns\Translatable;
use LaraZeus\SpatieTranslatable\Actions\LocaleSwitcher;
use Filament\Tables\Table;

class ListTasks extends ListRecords
{
    use Translatable;
    protected static string $resource = TaskResource::class;

    protected function getHeaderActions(): array
    {
        return [
            //CreateAction::make(),
            //LocaleSwitcher::make(),
        ];
    }
    protected function makeTable(): Table
    {
        return parent::makeTable()->recordUrl(null);
    }
}
