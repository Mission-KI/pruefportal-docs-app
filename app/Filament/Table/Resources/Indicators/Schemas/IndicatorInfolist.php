<?php

namespace App\Filament\Table\Resources\Indicators\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Support\Enums\TextSize;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Support\Enums\FontWeight;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use App\Filament\Table\Resources\Methods\MethodResource;

class IndicatorInfolist
{
    public static function configure(Schema $schema): Schema
    {
        /*
        'name',
        'short_name',
        'requirement',
        'a',
        'b',
        'c',
        'd',
        'additional_info',
        'reference',
        'type',
        'weighting',
        'links'        
        */
        return $schema
            ->components([
                Section::make('')
                    ->schema([
                        TextEntry::make('short_name')
                            ->label("Indikator")
                            ->size(TextSize::Large)
                            ->weight(FontWeight::Bold),
                        TextEntry::make('requirement')
                            ->label('Beschreibung')
                            ->size(TextSize::Large)
                            ->color('primary')
                            ->hiddenLabel(),
                        TextEntry::make('dimension.name')
                            ->label("Qualitätsdimension"),
                        TextEntry::make('criterion.name')
                            ->label("Kriterium"),
                        TextEntry::make('type')
                            ->label("Typ"),
                        TextEntry::make('reference')
                            ->label("Bezugsebene"),
                        TextEntry::make('additional_info')
                            ->label("Zusätzliche Informationen"),
                        TextEntry::make('link')
                            ->label("Verknüpfung"),
                        TextEntry::make('methods')
                            ->label("Relevante technische Prüfmethoden")
                            ->getStateUsing(function ($record): string {
                                $html = '';
                                foreach ($record->methods as $method) {
                                    // Manually create the HTML with the link
                                    $html .= "<a href='/methods/" . $method->id . "' style='display:block;'>" . $method->name . "</a>";
                                }
                                $html .= "<p style='margin-top:1em;'>→ <a href='/methods?filters[Indikator][value]=" . $record->id . "' style='text-decoration:underline;'>In Tabelle anzeigen</a></p>";
                                return $html;
                            })
                            ->html()
                            ->listWithLineBreaks() // Display items on new lines                          
                ,
                    ]),

                Section::make('Observablen')
                    ->description("Qualitätslevels A bis D")
                    ->schema([
                        Tabs::make('Tabs')
                            ->contained(false)
                            ->tabs([
                                Tab::make('A')
                                    ->schema([
                                        TextEntry::make('a')
                                            ->hiddenLabel()
                                            ->markdown()
                                    ]),
                                Tab::make('B')
                                    ->schema([
                                        TextEntry::make('b')
                                            ->hiddenLabel()
                                            ->markdown()
                                    ]),
                                Tab::make('C')
                                    ->schema([
                                        TextEntry::make('c')
                                            ->hiddenLabel()
                                            ->markdown()
                                    ]),
                                Tab::make('D')
                                    ->schema([
                                        TextEntry::make('d')
                                            ->hiddenLabel()
                                            ->markdown()
                                    ]),
                            ]),
                    ])
            ]);
    }
}
