import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Criteria\Pages\EditCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/EditCriterion.php:7
* @route '/admin/criteria/{record}/edit'
*/
const EditCriterion = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCriterion.url(args, options),
    method: 'get',
})

EditCriterion.definition = {
    methods: ["get","head"],
    url: '/admin/criteria/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Criteria\Pages\EditCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/EditCriterion.php:7
* @route '/admin/criteria/{record}/edit'
*/
EditCriterion.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditCriterion.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Criteria\Pages\EditCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/EditCriterion.php:7
* @route '/admin/criteria/{record}/edit'
*/
EditCriterion.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCriterion.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\EditCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/EditCriterion.php:7
* @route '/admin/criteria/{record}/edit'
*/
EditCriterion.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCriterion.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\EditCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/EditCriterion.php:7
* @route '/admin/criteria/{record}/edit'
*/
const EditCriterionForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCriterion.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\EditCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/EditCriterion.php:7
* @route '/admin/criteria/{record}/edit'
*/
EditCriterionForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCriterion.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Criteria\Pages\EditCriterion::__invoke
* @see Filament/Resources/Criteria/Pages/EditCriterion.php:7
* @route '/admin/criteria/{record}/edit'
*/
EditCriterionForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCriterion.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCriterion.form = EditCriterionForm

export default EditCriterion