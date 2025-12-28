import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Table\Resources\Indicators\Pages\ViewIndicator::__invoke
* @see Filament/Table/Resources/Indicators/Pages/ViewIndicator.php:7
* @route '/indicators/{record}'
*/
const ViewIndicator = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewIndicator.url(args, options),
    method: 'get',
})

ViewIndicator.definition = {
    methods: ["get","head"],
    url: '/indicators/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Table\Resources\Indicators\Pages\ViewIndicator::__invoke
* @see Filament/Table/Resources/Indicators/Pages/ViewIndicator.php:7
* @route '/indicators/{record}'
*/
ViewIndicator.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewIndicator.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Table\Resources\Indicators\Pages\ViewIndicator::__invoke
* @see Filament/Table/Resources/Indicators/Pages/ViewIndicator.php:7
* @route '/indicators/{record}'
*/
ViewIndicator.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewIndicator.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Indicators\Pages\ViewIndicator::__invoke
* @see Filament/Table/Resources/Indicators/Pages/ViewIndicator.php:7
* @route '/indicators/{record}'
*/
ViewIndicator.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewIndicator.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Table\Resources\Indicators\Pages\ViewIndicator::__invoke
* @see Filament/Table/Resources/Indicators/Pages/ViewIndicator.php:7
* @route '/indicators/{record}'
*/
const ViewIndicatorForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewIndicator.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Indicators\Pages\ViewIndicator::__invoke
* @see Filament/Table/Resources/Indicators/Pages/ViewIndicator.php:7
* @route '/indicators/{record}'
*/
ViewIndicatorForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewIndicator.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Table\Resources\Indicators\Pages\ViewIndicator::__invoke
* @see Filament/Table/Resources/Indicators/Pages/ViewIndicator.php:7
* @route '/indicators/{record}'
*/
ViewIndicatorForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewIndicator.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewIndicator.form = ViewIndicatorForm

export default ViewIndicator