<?php

namespace App\Filament\Table\Resources\Methods\Tables;

use App\Models\Method;
use App\Models\Indicator;
use App\Models\Criterion;
use Filament\Actions\BulkActionGroup;
use Filament\Support\Enums\FontWeight;
use Filament\Support\Enums\Width;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Support\Enums\IconSize;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Table;
use Filament\Tables\Filters\SelectFilter;
use ToneGabes\Filament\Icons\Enums\Phosphor;
use ToneGabes\Filament\Icons\Enums\Weight;
use Filament\Table\Resources\Methods\Tables\Builder;

class MethodsTable
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
                TextColumn::make('name')
                    ->sortable(query: function ($query, $direction) {
                        return $query->orderByRaw("name->>'en' {$direction}");
                    })
                    ->searchable()
                    ->description(fn(Method $m) => $wrap($m->description, 80))
                    // ->description('description')
                    ->weight(FontWeight::SemiBold)
                    //->limitWithTooltip()
                    //->width('10%'),
                    //->wrap()
                    //->lineClamp(2)
                    ->grow(),
                IconColumn::make('task.name')->visibleFrom('sm')
                    ->label('Task')
                    ->icon(fn(string $state) => match ($state) {
                        'Regression' => 'carbon-bland-altman-plot',
                        'Klassifizierung' => 'carbon-support-vector-machine',
                        'Clustering' => 'carbon-chart-t-sne',
                        'Generative KI' => 'carbon-cognitive',
                        'Segmentierung' => 'carbon-circle-packing',
                        'Audio' => 'carbon-waveform',
                        default => 'phosphor-asterisk-bold',
                    })
                    ->color('black')->size(IconSize::Medium),
                TextColumn::make('description')->visibleFrom('md')
                    ->searchable()
                    ->hidden()
                    ->grow(false),
                IconColumn::make('complexity.name')->visibleFrom('md')
                    ->label("Tiefe")
                    ->icon(fn(string $state) => match ($state) {
                        'Basismethode' => 'carbon-certificate-check',
                        'Fortgeschrittene Methode' => 'carbon-certificate',
                        default => 'carbon-non-certified',
                    })
                    ->color(fn(string $state) => match ($state) {
                        'Fortgeschrittene Methode' => "black",
                        default => 'gray',
                    })
                    ->size(IconSize::Medium)
                    ->grow(false),
                IconColumn::make('resultComplexity.name')->visibleFrom('md')
                    ->label('Ergebnis')
                    ->icon(fn(string $state) => match ($state) {
                        'einzelne/mehrere reelle Zahlen' => 'carbon-character-whole-number',
                        'komplexe Ergebnisse' => 'carbon-data-categorical',
                        default => Heroicon::OutlinedQuestionMarkCircle,
                    })
                    ->color("black")
                    //->size(IconSize::Medium)
                    ->grow(false),
                IconColumn::make('canAutomate.name')->visibleFrom('md')
                    ->label('Autom.')
                    ->wrapHeader()
                    ->icon(fn(string $state) => match ($state) {
                        'Yes' => 'carbon-automatic',
                        'No' => Heroicon::OutlinedNoSymbol,
                        'Most likely' => Heroicon::OutlinedQuestionMarkCircle,
                        'ja' => 'carbon-automatic',
                        'nein' => Heroicon::OutlinedNoSymbol,
                        'wahrscheinlich' => Heroicon::OutlinedQuestionMarkCircle,
                        default => Heroicon::OutlinedQuestionMarkCircle,
                    })
                    ->color(fn(string $state) => match ($state) {
                        'Yes' => "black",
                        'ja' => "black",
                        default => 'gray',
                    })
                    ->size(IconSize::Medium)
                    ->grow(false),
                /*TextColumn::make('dataRequirement.name')->visibleFrom('xl')
                    ->label('Datenanforderungen')
                    ->badge()
                    ->color('gray')->grow(false),
                TextColumn::make('modelAccessRequirement.name')->visibleFrom('xl')
                    ->label('Modellzugriff')
                    ->badge()
                    ->color('gray')
                    ->grow(false),*/
                /*
                TextColumn::make('criteria.name')
                    ->listWithLineBreaks()
                    ->label("Kriterien")
                    ->visibleFrom('xl')
                    ->badge()
                    ->color('gray')
                    ->grow(false),*/
            ])
            ->filters([
                SelectFilter::make('Task')
                    ->multiple()
                    ->relationship('task', 'name', modifyQueryUsing: fn($query) => $query->orderByRaw("name->>'de'")),
                /*SelectFilter::make('Datenanforderungen')
                    ->multiple()
                    ->relationship('dataRequirement', 'name', modifyQueryUsing: fn($query) => $query->orderByRaw("name->>'de'")),*/
            SelectFilter::make('Tiefe')
                ->multiple()
                ->relationship('complexity', 'name', modifyQueryUsing: fn($query) => $query->orderByRaw("name->>'de'")),
                SelectFilter::make('Ergebnis')
                    ->multiple()
                    ->relationship('resultComplexity', 'name', modifyQueryUsing: fn($query) => $query->orderByRaw("name->>'de'")),
            SelectFilter::make('Automatisierbar')
                ->multiple()
                ->relationship('canAutomate', 'name', modifyQueryUsing: fn($query) => $query->orderByRaw("name->>'de'")),
            SelectFilter::make('Indikator')
                ->options(fn() => Indicator::all()->pluck('short_name', 'id')) //you probably want to limit this in some way?
                ->modifyQueryUsing(function ($query, $state) {
                    if (! $state['value']) {
                        return $query;
                    }
                    return $query->whereHas('indicators', fn($query) => $query->where('id', $state['value']));
                }),
            ], layout: FiltersLayout::Modal)
            ->filtersFormWidth(Width::TwoExtraLarge)
            ->recordActions([
                #ViewAction::make(),
                #EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    #DeleteBulkAction::make(),
                ]),
            ]);
    }
}
