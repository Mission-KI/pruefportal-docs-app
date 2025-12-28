import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Indicators\Pages\CreateIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/CreateIndicator.php:7
* @route '/admin/indicators/create'
*/
const CreateIndicator = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateIndicator.url(options),
    method: 'get',
})

CreateIndicator.definition = {
    methods: ["get","head"],
    url: '/admin/indicators/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Indicators\Pages\CreateIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/CreateIndicator.php:7
* @route '/admin/indicators/create'
*/
CreateIndicator.url = (options?: RouteQueryOptions) => {
    return CreateIndicator.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Indicators\Pages\CreateIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/CreateIndicator.php:7
* @route '/admin/indicators/create'
*/
CreateIndicator.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateIndicator.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\CreateIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/CreateIndicator.php:7
* @route '/admin/indicators/create'
*/
CreateIndicator.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateIndicator.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\CreateIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/CreateIndicator.php:7
* @route '/admin/indicators/create'
*/
const CreateIndicatorForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateIndicator.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\CreateIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/CreateIndicator.php:7
* @route '/admin/indicators/create'
*/
CreateIndicatorForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateIndicator.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Indicators\Pages\CreateIndicator::__invoke
* @see Filament/Resources/Indicators/Pages/CreateIndicator.php:7
* @route '/admin/indicators/create'
*/
CreateIndicatorForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateIndicator.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateIndicator.form = CreateIndicatorForm

export default CreateIndicator