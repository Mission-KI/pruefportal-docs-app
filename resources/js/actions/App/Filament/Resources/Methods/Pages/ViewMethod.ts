import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Methods\Pages\ViewMethod::__invoke
* @see Filament/Resources/Methods/Pages/ViewMethod.php:7
* @route '/admin/methods/{record}'
*/
const ViewMethod = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewMethod.url(args, options),
    method: 'get',
})

ViewMethod.definition = {
    methods: ["get","head"],
    url: '/admin/methods/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Methods\Pages\ViewMethod::__invoke
* @see Filament/Resources/Methods/Pages/ViewMethod.php:7
* @route '/admin/methods/{record}'
*/
ViewMethod.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewMethod.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Methods\Pages\ViewMethod::__invoke
* @see Filament/Resources/Methods/Pages/ViewMethod.php:7
* @route '/admin/methods/{record}'
*/
ViewMethod.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\ViewMethod::__invoke
* @see Filament/Resources/Methods/Pages/ViewMethod.php:7
* @route '/admin/methods/{record}'
*/
ViewMethod.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewMethod.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Methods\Pages\ViewMethod::__invoke
* @see Filament/Resources/Methods/Pages/ViewMethod.php:7
* @route '/admin/methods/{record}'
*/
const ViewMethodForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\ViewMethod::__invoke
* @see Filament/Resources/Methods/Pages/ViewMethod.php:7
* @route '/admin/methods/{record}'
*/
ViewMethodForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\ViewMethod::__invoke
* @see Filament/Resources/Methods/Pages/ViewMethod.php:7
* @route '/admin/methods/{record}'
*/
ViewMethodForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewMethod.form = ViewMethodForm

export default ViewMethod