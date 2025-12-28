import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Methods\Pages\ListMethods::__invoke
* @see Filament/Resources/Methods/Pages/ListMethods.php:7
* @route '/admin/methods'
*/
const ListMethods = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMethods.url(options),
    method: 'get',
})

ListMethods.definition = {
    methods: ["get","head"],
    url: '/admin/methods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Methods\Pages\ListMethods::__invoke
* @see Filament/Resources/Methods/Pages/ListMethods.php:7
* @route '/admin/methods'
*/
ListMethods.url = (options?: RouteQueryOptions) => {
    return ListMethods.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Methods\Pages\ListMethods::__invoke
* @see Filament/Resources/Methods/Pages/ListMethods.php:7
* @route '/admin/methods'
*/
ListMethods.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMethods.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\ListMethods::__invoke
* @see Filament/Resources/Methods/Pages/ListMethods.php:7
* @route '/admin/methods'
*/
ListMethods.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListMethods.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Methods\Pages\ListMethods::__invoke
* @see Filament/Resources/Methods/Pages/ListMethods.php:7
* @route '/admin/methods'
*/
const ListMethodsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMethods.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\ListMethods::__invoke
* @see Filament/Resources/Methods/Pages/ListMethods.php:7
* @route '/admin/methods'
*/
ListMethodsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMethods.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\ListMethods::__invoke
* @see Filament/Resources/Methods/Pages/ListMethods.php:7
* @route '/admin/methods'
*/
ListMethodsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMethods.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListMethods.form = ListMethodsForm

export default ListMethods