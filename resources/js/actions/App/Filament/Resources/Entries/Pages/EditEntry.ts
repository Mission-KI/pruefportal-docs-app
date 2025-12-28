import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Entries\Pages\EditEntry::__invoke
* @see Filament/Resources/Entries/Pages/EditEntry.php:7
* @route '/admin/entries/{record}/edit'
*/
const EditEntry = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditEntry.url(args, options),
    method: 'get',
})

EditEntry.definition = {
    methods: ["get","head"],
    url: '/admin/entries/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Entries\Pages\EditEntry::__invoke
* @see Filament/Resources/Entries/Pages/EditEntry.php:7
* @route '/admin/entries/{record}/edit'
*/
EditEntry.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditEntry.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Entries\Pages\EditEntry::__invoke
* @see Filament/Resources/Entries/Pages/EditEntry.php:7
* @route '/admin/entries/{record}/edit'
*/
EditEntry.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditEntry.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Entries\Pages\EditEntry::__invoke
* @see Filament/Resources/Entries/Pages/EditEntry.php:7
* @route '/admin/entries/{record}/edit'
*/
EditEntry.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditEntry.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Entries\Pages\EditEntry::__invoke
* @see Filament/Resources/Entries/Pages/EditEntry.php:7
* @route '/admin/entries/{record}/edit'
*/
const EditEntryForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEntry.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Entries\Pages\EditEntry::__invoke
* @see Filament/Resources/Entries/Pages/EditEntry.php:7
* @route '/admin/entries/{record}/edit'
*/
EditEntryForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEntry.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Entries\Pages\EditEntry::__invoke
* @see Filament/Resources/Entries/Pages/EditEntry.php:7
* @route '/admin/entries/{record}/edit'
*/
EditEntryForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEntry.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditEntry.form = EditEntryForm

export default EditEntry