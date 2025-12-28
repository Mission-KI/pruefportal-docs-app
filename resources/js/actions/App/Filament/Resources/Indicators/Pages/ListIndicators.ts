import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Indicators\Pages\ListIndicators::__invoke
* @see Filament/Resources/Indicators/Pages/ListIndicators.php:7
* @route '/admin/indicators'
*/
const ListIndicators = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListIndicators.url(options),
    method: 'get',
})

ListIndicators.definition = {
    methods: ["get","head"],
    url: '/admin/indicators',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Indicators\Pages\ListIndicators::__invoke
* @see Filament/Resources/Indicators/Pages/ListIndicators.php:7
* @route '/admin/indicators'
*/
ListIndicators.url = (options?: RouteQueryOptions) => {
    return ListIndicators.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Indicators\Pages\ListIndicators::__invoke
* @see Filament/Resources/Indicators/Pages/ListIndicators.php:7
* @route '/admin/indicators'
*/
ListIndicators.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListIndicators.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\ListIndicators::__invoke
* @see Filament/Resources/Indicators/Pages/ListIndicators.php:7
* @route '/admin/indicators'
*/
ListIndicators.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListIndicators.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\ListIndicators::__invoke
* @see Filament/Resources/Indicators/Pages/ListIndicators.php:7
* @route '/admin/indicators'
*/
const ListIndicatorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListIndicators.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\ListIndicators::__invoke
* @see Filament/Resources/Indicators/Pages/ListIndicators.php:7
* @route '/admin/indicators'
*/
ListIndicatorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListIndicators.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\ListIndicators::__invoke
* @see Filament/Resources/Indicators/Pages/ListIndicators.php:7
* @route '/admin/indicators'
*/
ListIndicatorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListIndicators.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListIndicators.form = ListIndicatorsForm

export default ListIndicators