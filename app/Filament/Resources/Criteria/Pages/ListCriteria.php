<?php

namespace App\Filament\Resources\Criteria\Pages;

use App\Filament\Resources\Criteria\CriterionResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Tables\Table;

class ListCriteria extends ListRecords
{
    protected static string $resource = CriterionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            //CreateAction::make(),
        ];
    }
    protected function makeTable(): Table
    {
        return parent::makeTable()->recordUrl(null);
    }
}
