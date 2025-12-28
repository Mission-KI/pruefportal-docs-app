import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Entries\Pages\CreateEntry::__invoke
* @see Filament/Resources/Entries/Pages/CreateEntry.php:7
* @route '/admin/entries/create'
*/
const CreateEntry = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateEntry.url(options),
    method: 'get',
})

CreateEntry.definition = {
    methods: ["get","head"],
    url: '/admin/entries/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Entries\Pages\CreateEntry::__invoke
* @see Filament/Resources/Entries/Pages/CreateEntry.php:7
* @route '/admin/entries/create'
*/
CreateEntry.url = (options?: RouteQueryOptions) => {
    return CreateEntry.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Entries\Pages\CreateEntry::__invoke
* @see Filament/Resources/Entries/Pages/CreateEntry.php:7
* @route '/admin/entries/create'
*/
CreateEntry.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateEntry.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Entries\Pages\CreateEntry::__invoke
* @see Filament/Resources/Entries/Pages/CreateEntry.php:7
* @route '/admin/entries/create'
*/
CreateEntry.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateEntry.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Entries\Pages\CreateEntry::__invoke
* @see Filament/Resources/Entries/Pages/CreateEntry.php:7
* @route '/admin/entries/create'
*/
const CreateEntryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEntry.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Entries\Pages\CreateEntry::__invoke
* @see Filament/Resources/Entries/Pages/CreateEntry.php:7
* @route '/admin/entries/create'
*/
CreateEntryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEntry.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Entries\Pages\CreateEntry::__invoke
* @see Filament/Resources/Entries/Pages/CreateEntry.php:7
* @route '/admin/entries/create'
*/
CreateEntryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateEntry.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateEntry.form = CreateEntryForm

export default CreateEntry