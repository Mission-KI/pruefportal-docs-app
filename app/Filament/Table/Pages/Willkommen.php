<?php

namespace App\Filament\Table\Pages;

use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\HtmlString;
use Illuminate\Contracts\Support\Htmlable;
use BackedEnum;



class Willkommen extends Page
{
    protected string $view = 'filament.table.pages.willkommen';
    //protected static $navigationIcon = Heroicon::OutlinedHome;
    protected static ?string $title = 'Willkommen';
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedHome;

    public function getHeading(): string
    {
        return "Willkommen";
    }

    public function getSubheading(): Htmlable|string|null
    {
        $version = $this->getAppVersion();

        return new HTMLString('
        Willkommen in der offiziellen Dokumentation des <a
                href="https://pruefportal.mission-ki.de/"><strong>Prüfportals
                    von MISSION KI</strong></a> (Version ' . $version . ').<br>Hier finden Sie alles, was Sie benötigen, um das Portal effektiv
            zu nutzen, Prüfungen durchzuführen und die Qualität Ihrer KI-Anwendungen nach dem <strong>MISSION KI
                Qualitätsstandard</strong> zu bewerten.');
    }

    protected function getAppVersion(): string
    {
        $packageJsonPath = base_path('package.json');

        if (file_exists($packageJsonPath)) {
            $packageJson = json_decode(file_get_contents($packageJsonPath), true);
            return $packageJson['version'] ?? 'unknown';
        }

        return 'unknown';
    }

}
