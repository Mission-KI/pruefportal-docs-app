<?php

namespace App\Providers\Filament;


use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;

use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;

use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Filament\Support\Assets\Css;
use LaraZeus\SpatieTranslatable\SpatieTranslatablePlugin;
use Filament\Support\Enums\Width;
use Filament\Support\Facades\FilamentView;
use Filament\View\PanelsRenderHook;
use Illuminate\Support\Facades\Blade;




/**
 * Public-facing Table Panel for the MISSION KI quality standard documentation.
 *
 * SECURITY NOTE: This panel is INTENTIONALLY PUBLIC (no authentication required).
 * It serves as a read-only reference for the MISSION KI quality standards and methods.
 * All data displayed here is meant to be publicly accessible.
 *
 * The Admin panel (AdminPanelProvider) requires authentication for data management.
 */
class TablePanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        $colors = [
            'deep_purple' => Color::rgb("rgb(60, 4, 131)"),
            'light_purple' => Color::rgb("rgb(212, 187, 255)")
        ];
        return $panel
            ->renderHook(
                PanelsRenderHook::TOPBAR_END,
                fn(): string => Blade::render('
                    <x-filament::button outlined
                        href="https://pruefportal.mission-ki.de/"
                        tag="a"
                        style="margin-left:1em;"
                    >
                        Zum Prüfportal →
                    </x-filament::button>
                '),
            )
            ->id('table')
            ->path('')
            ->assets([
                Css::make('custom-stylesheet', resource_path('css/custom.css')),
            ])
            ->favicon(asset('favicon-32x32.png'))
            ->brandLogo(fn() => view('mission-ki.logo'))
            ->brandLogoHeight('auto')
            ->globalSearch(true)
            ->darkMode(false)
            ->maxContentWidth(Width::Full)
            ->userMenu(false)
            ->colors([
                'primary' => $colors['deep_purple'],
            ])
            ->discoverResources(in: app_path('Filament/Table/Resources'), for: 'App\Filament\Table\Resources')
            ->discoverPages(in: app_path('Filament/Table/Pages'), for: 'App\Filament\Table\Pages')
            ->pages([])
            //->discoverWidgets(in: app_path('Filament/Table/Widgets'), for: 'App\Filament\Table\Widgets')
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                // AuthenticateSession omitted - public panel (see class docblock)
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            //->topNavigation()
            ->sidebarCollapsibleOnDesktop()
            ->sidebarWidth('15rem')
            ->plugin(
                SpatieTranslatablePlugin::make()
                    ->defaultLocales(['de']),
            );
            // No authMiddleware - this panel is intentionally public (see class docblock)
    }
}
