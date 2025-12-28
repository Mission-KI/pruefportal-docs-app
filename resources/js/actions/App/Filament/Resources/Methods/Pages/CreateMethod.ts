import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Methods\Pages\CreateMethod::__invoke
* @see Filament/Resources/Methods/Pages/CreateMethod.php:7
* @route '/admin/methods/create'
*/
const CreateMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMethod.url(options),
    method: 'get',
})

CreateMethod.definition = {
    methods: ["get","head"],
    url: '/admin/methods/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Methods\Pages\CreateMethod::__invoke
* @see Filament/Resources/Methods/Pages/CreateMethod.php:7
* @route '/admin/methods/create'
*/
CreateMethod.url = (options?: RouteQueryOptions) => {
    return CreateMethod.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Methods\Pages\CreateMethod::__invoke
* @see Filament/Resources/Methods/Pages/CreateMethod.php:7
* @route '/admin/methods/create'
*/
CreateMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMethod.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\CreateMethod::__invoke
* @see Filament/Resources/Methods/Pages/CreateMethod.php:7
* @route '/admin/methods/create'
*/
CreateMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateMethod.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Methods\Pages\CreateMethod::__invoke
* @see Filament/Resources/Methods/Pages/CreateMethod.php:7
* @route '/admin/methods/create'
*/
const CreateMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMethod.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\CreateMethod::__invoke
* @see Filament/Resources/Methods/Pages/CreateMethod.php:7
* @route '/admin/methods/create'
*/
CreateMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMethod.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Methods\Pages\CreateMethod::__invoke
* @see Filament/Resources/Methods/Pages/CreateMethod.php:7
* @route '/admin/methods/create'
*/
CreateMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMethod.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateMethod.form = CreateMethodForm

export default CreateMethod