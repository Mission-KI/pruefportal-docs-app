import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Dimensions\Pages\EditDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/EditDimension.php:7
* @route '/admin/dimensions/{record}/edit'
*/
const EditDimension = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDimension.url(args, options),
    method: 'get',
})

EditDimension.definition = {
    methods: ["get","head"],
    url: '/admin/dimensions/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Dimensions\Pages\EditDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/EditDimension.php:7
* @route '/admin/dimensions/{record}/edit'
*/
EditDimension.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditDimension.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Dimensions\Pages\EditDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/EditDimension.php:7
* @route '/admin/dimensions/{record}/edit'
*/
EditDimension.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDimension.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\EditDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/EditDimension.php:7
* @route '/admin/dimensions/{record}/edit'
*/
EditDimension.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditDimension.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\EditDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/EditDimension.php:7
* @route '/admin/dimensions/{record}/edit'
*/
const EditDimensionForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDimension.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\EditDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/EditDimension.php:7
* @route '/admin/dimensions/{record}/edit'
*/
EditDimensionForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDimension.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Dimensions\Pages\EditDimension::__invoke
* @see Filament/Resources/Dimensions/Pages/EditDimension.php:7
* @route '/admin/dimensions/{record}/edit'
*/
EditDimensionForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDimension.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditDimension.form = EditDimensionForm

export default EditDimension