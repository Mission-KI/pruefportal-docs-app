import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Dimensions\Pages\ListDimensions::__invoke
* @see Filament/Resources/Dimensions/Pages/ListDimensions.php:7
* @route '/admin/dimensions'
*/
const ListDimensions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDimensions.url(options),
    method: 'get',
})

ListDimensions.definition = {
    methods: ["get","head"],
    url: '/admin/dimensions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Dimensions\Pages\ListDimensions::__invoke
* @see Filament/Resources/Dimensions/Pages/ListDimensions.php:7
* @route '/admin/dimensions'
*/
ListDimensions.url = (options?: RouteQueryOptions) => {
    return ListDimensions.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Dimensions\Pages\ListDimensions::__invoke
* @see Filament/Resources/Dimensions/Pages/ListDimensions.php:7
* @route '/admin/dimensions'
*/
ListDimensions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDimensions.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\ListDimensions::__invoke
* @see Filament/Resources/Dimensions/Pages/ListDimensions.php:7
* @route '/admin/dimensions'
*/
ListDimensions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDimensions.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\ListDimensions::__invoke
* @see Filament/Resources/Dimensions/Pages/ListDimensions.php:7
* @route '/admin/dimensions'
*/
const ListDimensionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDimensions.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\ListDimensions::__invoke
* @see Filament/Resources/Dimensions/Pages/ListDimensions.php:7
* @route '/admin/dimensions'
*/
ListDimensionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDimensions.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\ListDimensions::__invoke
* @see Filament/Resources/Dimensions/Pages/ListDimensions.php:7
* @route '/admin/dimensions'
*/
ListDimensionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDimensions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListDimensions.form = ListDimensionsForm

export default ListDimensions