import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
const Willkommen = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Willkommen.url(options),
    method: 'get',
})

Willkommen.definition = {
    methods: ["get","head"],
    url: '/willkommen',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
Willkommen.url = (options?: RouteQueryOptions) => {
    return Willkommen.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
Willkommen.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Willkommen.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
Willkommen.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Willkommen.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
const WillkommenForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Willkommen.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
WillkommenForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Willkommen.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
WillkommenForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Willkommen.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Willkommen.form = WillkommenForm

export default Willkommen