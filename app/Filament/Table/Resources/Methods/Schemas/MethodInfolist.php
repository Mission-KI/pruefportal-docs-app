<?php

namespace App\Filament\Table\Resources\Methods\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Support\Enums\TextSize;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Support\Enums\FontWeight;

class MethodInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('')
                    ->schema([
                        TextEntry::make('name')
                            ->hiddenLabel()
                            ->size(TextSize::Large)
                            ->weight(FontWeight::Bold),
                        TextEntry::make('description')
                            ->label('Beschreibung')
                            ->size(TextSize::Large)
                            ->color('primary')
                            ->hiddenLabel(),
                        TextEntry::make('task.name')
                            ->label('Task')
                            ->inlineLabel(),
                        TextEntry::make('dataRequirement.name')
                            ->label('Datenanf.')
                            ->inlineLabel(),
                        TextEntry::make('modelAccessRequirement.name')
                            ->label('Modellzugriff')
                            ->inlineLabel(),
                        TextEntry::make('resultComplexity.name')
                            ->label('Ergebnis')
                            ->inlineLabel(),
                        TextEntry::make('canAutomate.name')
                            ->label('Automatisierbar')
                            ->inlineLabel(),
                        TextEntry::make('complexity.name')
                            ->label('Tiefe')
                            ->inlineLabel()
                    ]),
                Section::make('Verweise')
                    ->schema([
                        TextEntry::make('criteria')
                            ->getStateUsing(function ($record): string {
                                $html = '';
                                foreach ($record->criteria as $criterion) {
                                    // Manually create the HTML with the link
                                    $html .= "<a href='/indicators?filters[Kriterium][values][0]=" . $criterion->id . "' style='display:block;'>" . $criterion->name . "</a>";
                                }
                                return $html;
                            })
                            ->html()
                            ->listWithLineBreaks()
                            ->label("Relevante Qualitätskriterien"),
                        TextEntry::make('indicators')
                            ->getStateUsing(function ($record): string {
                                $html = '';
                                foreach ($record->indicators as $indicator) {
                                    // Manually create the HTML with the link
                                    $html .= "<a href='/indicators/" . $indicator->id . "' style='display:block;'>" . $indicator->short_name . "</a>";
                                }
                                return $html;
                            })
                            ->html()
                            ->listWithLineBreaks()
                            ->label("Relevante Indikatoren"),
                        TextEntry::make('reference')
                            ->label('Referenz'),
                        TextEntry::make('implementation')
                            ->label('Implementierungen'),
                        TextEntry::make('tools')
                            ->label('Prüfwerkzeuge & Frameworks')
                    ])
            ]);
    }
}
