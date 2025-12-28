import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Criteria\Pages\CreateCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/CreateCriterion.php:7
* @route '/admin/criteria/create'
*/
const CreateCriterion = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCriterion.url(options),
    method: 'get',
})

CreateCriterion.definition = {
    methods: ["get","head"],
    url: '/admin/criteria/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Criteria\Pages\CreateCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/CreateCriterion.php:7
* @route '/admin/criteria/create'
*/
CreateCriterion.url = (options?: RouteQueryOptions) => {
    return CreateCriterion.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Criteria\Pages\CreateCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/CreateCriterion.php:7
* @route '/admin/criteria/create'
*/
CreateCriterion.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCriterion.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\CreateCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/CreateCriterion.php:7
* @route '/admin/criteria/create'
*/
CreateCriterion.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCriterion.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\CreateCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/CreateCriterion.php:7
* @route '/admin/criteria/create'
*/
const CreateCriterionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCriterion.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\CreateCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/CreateCriterion.php:7
* @route '/admin/criteria/create'
*/
CreateCriterionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCriterion.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\CreateCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/CreateCriterion.php:7
* @route '/admin/criteria/create'
*/
CreateCriterionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCriterion.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCriterion.form = CreateCriterionForm

export default CreateCriterion