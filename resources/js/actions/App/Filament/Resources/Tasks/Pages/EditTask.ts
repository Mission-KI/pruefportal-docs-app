import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Tasks\Pages\EditTask::__invoke
* @see Filament/Resources/Tasks/Pages/EditTask.php:7
* @route '/admin/tasks/{record}/edit'
*/
const EditTask = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTask.url(args, options),
    method: 'get',
})

EditTask.definition = {
    methods: ["get","head"],
    url: '/admin/tasks/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Tasks\Pages\EditTask::__invoke
* @see Filament/Resources/Tasks/Pages/EditTask.php:7
* @route '/admin/tasks/{record}/edit'
*/
EditTask.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditTask.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Tasks\Pages\EditTask::__invoke
* @see Filament/Resources/Tasks/Pages/EditTask.php:7
* @route '/admin/tasks/{record}/edit'
*/
EditTask.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTask.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\EditTask::__invoke
* @see Filament/Resources/Tasks/Pages/EditTask.php:7
* @route '/admin/tasks/{record}/edit'
*/
EditTask.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTask.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\EditTask::__invoke
* @see Filament/Resources/Tasks/Pages/EditTask.php:7
* @route '/admin/tasks/{record}/edit'
*/
const EditTaskForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTask.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\EditTask::__invoke
* @see Filament/Resources/Tasks/Pages/EditTask.php:7
* @route '/admin/tasks/{record}/edit'
*/
EditTaskForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTask.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\EditTask::__invoke
* @see Filament/Resources/Tasks/Pages/EditTask.php:7
* @route '/admin/tasks/{record}/edit'
*/
EditTaskForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTask.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTask.form = EditTaskForm

export default EditTask