import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
export const willkommen = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: willkommen.url(options),
    method: 'get',
})

willkommen.definition = {
    methods: ["get","head"],
    url: '/willkommen',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
willkommen.url = (options?: RouteQueryOptions) => {
    return willkommen.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
willkommen.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: willkommen.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
willkommen.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: willkommen.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
const willkommenForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: willkommen.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
willkommenForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: willkommen.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Pages\Willkommen::__invoke
* @see Filament/Table/Pages/Willkommen.php:7
* @route '/willkommen'
*/
willkommenForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: willkommen.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

willkommen.form = willkommenForm

const pages = {
    willkommen,
}

export default pages