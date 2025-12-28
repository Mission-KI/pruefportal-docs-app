import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Methods\Pages\EditMethod::__invoke
* @see Filament/Resources/Methods/Pages/EditMethod.php:7
* @route '/admin/methods/{record}/edit'
*/
const EditMethod = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMethod.url(args, options),
    method: 'get',
})

EditMethod.definition = {
    methods: ["get","head"],
    url: '/admin/methods/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Methods\Pages\EditMethod::__invoke
* @see Filament/Resources/Methods/Pages/EditMethod.php:7
* @route '/admin/methods/{record}/edit'
*/
EditMethod.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditMethod.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Methods\Pages\EditMethod::__invoke
* @see Filament/Resources/Methods/Pages/EditMethod.php:7
* @route '/admin/methods/{record}/edit'
*/
EditMethod.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\EditMethod::__invoke
* @see Filament/Resources/Methods/Pages/EditMethod.php:7
* @route '/admin/methods/{record}/edit'
*/
EditMethod.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditMethod.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Methods\Pages\EditMethod::__invoke
* @see Filament/Resources/Methods/Pages/EditMethod.php:7
* @route '/admin/methods/{record}/edit'
*/
const EditMethodForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\EditMethod::__invoke
* @see Filament/Resources/Methods/Pages/EditMethod.php:7
* @route '/admin/methods/{record}/edit'
*/
EditMethodForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\EditMethod::__invoke
* @see Filament/Resources/Methods/Pages/EditMethod.php:7
* @route '/admin/methods/{record}/edit'
*/
EditMethodForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditMethod.form = EditMethodForm

export default EditMethod