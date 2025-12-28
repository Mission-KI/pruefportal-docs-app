import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
const ViewEntry = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewEntry.url(args, options),
    method: 'get',
})

ViewEntry.definition = {
    methods: ["get","head"],
    url: '/entries/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
ViewEntry.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewEntry.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
ViewEntry.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewEntry.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
ViewEntry.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewEntry.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
const ViewEntryForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEntry.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
ViewEntryForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEntry.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
ViewEntryForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEntry.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewEntry.form = ViewEntryForm

export default ViewEntry