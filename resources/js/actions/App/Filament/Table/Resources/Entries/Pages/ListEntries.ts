import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
const ListEntries = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEntries.url(options),
    method: 'get',
})

ListEntries.definition = {
    methods: ["get","head"],
    url: '/entries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
ListEntries.url = (options?: RouteQueryOptions) => {
    return ListEntries.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
ListEntries.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEntries.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
ListEntries.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListEntries.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
const ListEntriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEntries.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
ListEntriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEntries.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
ListEntriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEntries.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListEntries.form = ListEntriesForm

export default ListEntries