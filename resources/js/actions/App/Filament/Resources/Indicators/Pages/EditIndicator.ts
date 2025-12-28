import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Indicators\Pages\EditIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/EditIndicator.php:7
* @route '/admin/indicators/{record}/edit'
*/
const EditIndicator = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditIndicator.url(args, options),
    method: 'get',
})

EditIndicator.definition = {
    methods: ["get","head"],
    url: '/admin/indicators/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Indicators\Pages\EditIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/EditIndicator.php:7
* @route '/admin/indicators/{record}/edit'
*/
EditIndicator.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditIndicator.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Indicators\Pages\EditIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/EditIndicator.php:7
* @route '/admin/indicators/{record}/edit'
*/
EditIndicator.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditIndicator.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\EditIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/EditIndicator.php:7
* @route '/admin/indicators/{record}/edit'
*/
EditIndicator.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditIndicator.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\EditIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/EditIndicator.php:7
* @route '/admin/indicators/{record}/edit'
*/
const EditIndicatorForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditIndicator.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\EditIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/EditIndicator.php:7
* @route '/admin/indicators/{record}/edit'
*/
EditIndicatorForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditIndicator.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\EditIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/EditIndicator.php:7
* @route '/admin/indicators/{record}/edit'
*/
EditIndicatorForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditIndicator.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditIndicator.form = EditIndicatorForm

export default EditIndicator