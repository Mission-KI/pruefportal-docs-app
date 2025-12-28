<?php

namespace App\Filament\Table\Resources\Indicators\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use App\Models\Indicator;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Support\Enums\Width;



class IndicatorsTable
{
    public static function configure(Table $table): Table
    {
        $wrap = function ($string, $max_length) {
            if (strlen($string) > $max_length) {
                $string = wordwrap($string, $max_length);
                $string = substr($string, 0, strpos($string, "\n")) . "...";
            }
            return $string;
        };
        return $table
            ->columns([
                TextColumn::make('requirement')
                    ->sortable()
                    ->limit(50)
                    ->searchable()
                    ->label("Indikator"), //fn(Indicator $m) => $wrap($m->requirement, 80)
                TextColumn::make('short_name')
                    ->sortable()
                    ->searchable()
                    ->label("ID"),
                TextColumn::make('criterion.name')
                    ->label("Kriterium")
                    ->visibleFrom('xl')
                    ->grow(false),
                TextColumn::make('dimension.name')
                    ->label("Dimension")
                    ->visibleFrom('xl')
                    ->grow(false)
            ])
            ->filters([
                SelectFilter::make('Qualitätsdimension')
                    ->multiple()
                    ->relationship('dimension', 'name', modifyQueryUsing: fn($query) => $query->orderByRaw("name->>'de'")),
                SelectFilter::make('Kriterium')
                    ->multiple()
                    ->relationship('criterion', 'name', modifyQueryUsing: fn($query) => $query->orderByRaw("name->>'de'"))
            ], layout: FiltersLayout::Modal)
            ->recordActions([
                #ViewAction::make(),
                #EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    #DeleteBulkAction::make(),
                ]),
            ])
            ->filtersFormWidth(Width::TwoExtraLarge);
    }
}
