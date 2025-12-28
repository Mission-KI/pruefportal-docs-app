import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Criteria\Pages\ListCriteria::__invoke
* @see Filament/Resources/Criteria/Pages/ListCriteria.php:7
* @route '/admin/criteria'
*/
const ListCriteria = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCriteria.url(options),
    method: 'get',
})

ListCriteria.definition = {
    methods: ["get","head"],
    url: '/admin/criteria',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Criteria\Pages\ListCriteria::__invoke
* @see Filament/Resources/Criteria/Pages/ListCriteria.php:7
* @route '/admin/criteria'
*/
ListCriteria.url = (options?: RouteQueryOptions) => {
    return ListCriteria.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Criteria\Pages\ListCriteria::__invoke
* @see Filament/Resources/Criteria/Pages/ListCriteria.php:7
* @route '/admin/criteria'
*/
ListCriteria.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCriteria.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\ListCriteria::__invoke
* @see Filament/Resources/Criteria/Pages/ListCriteria.php:7
* @route '/admin/criteria'
*/
ListCriteria.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCriteria.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\ListCriteria::__invoke
* @see Filament/Resources/Criteria/Pages/ListCriteria.php:7
* @route '/admin/criteria'
*/
const ListCriteriaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCriteria.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\ListCriteria::__invoke
* @see Filament/Resources/Criteria/Pages/ListCriteria.php:7
* @route '/admin/criteria'
*/
ListCriteriaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCriteria.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\ListCriteria::__invoke
* @see Filament/Resources/Criteria/Pages/ListCriteria.php:7
* @route '/admin/criteria'
*/
ListCriteriaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCriteria.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCriteria.form = ListCriteriaForm

export default ListCriteria