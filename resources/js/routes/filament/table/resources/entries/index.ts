import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/entries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ListEntries::__invoke
* @see Filament/Table/Resources/Entries/Pages/ListEntries.php:7
* @route '/entries'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/entries/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Entries\Pages\ViewEntry::__invoke
* @see Filament/Table/Resources/Entries/Pages/ViewEntry.php:7
* @route '/entries/{record}'
*/
viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

const entries = {
    index,
    view,
}

export default entries