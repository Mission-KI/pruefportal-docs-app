import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Dimensions\Pages\CreateDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/CreateDimension.php:7
* @route '/admin/dimensions/create'
*/
const CreateDimension = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDimension.url(options),
    method: 'get',
})

CreateDimension.definition = {
    methods: ["get","head"],
    url: '/admin/dimensions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Dimensions\Pages\CreateDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/CreateDimension.php:7
* @route '/admin/dimensions/create'
*/
CreateDimension.url = (options?: RouteQueryOptions) => {
    return CreateDimension.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Dimensions\Pages\CreateDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/CreateDimension.php:7
* @route '/admin/dimensions/create'
*/
CreateDimension.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDimension.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\CreateDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/CreateDimension.php:7
* @route '/admin/dimensions/create'
*/
CreateDimension.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateDimension.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\CreateDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/CreateDimension.php:7
* @route '/admin/dimensions/create'
*/
const CreateDimensionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDimension.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\CreateDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/CreateDimension.php:7
* @route '/admin/dimensions/create'
*/
CreateDimensionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDimension.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\CreateDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/CreateDimension.php:7
* @route '/admin/dimensions/create'
*/
CreateDimensionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDimension.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateDimension.form = CreateDimensionForm

export default CreateDimension