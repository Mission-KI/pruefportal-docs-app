import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Tasks\Pages\CreateTask::__invoke
* @see Filament/Resources/Tasks/Pages/CreateTask.php:7
* @route '/admin/tasks/create'
*/
const CreateTask = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTask.url(options),
    method: 'get',
})

CreateTask.definition = {
    methods: ["get","head"],
    url: '/admin/tasks/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Tasks\Pages\CreateTask::__invoke
* @see Filament/Resources/Tasks/Pages/CreateTask.php:7
* @route '/admin/tasks/create'
*/
CreateTask.url = (options?: RouteQueryOptions) => {
    return CreateTask.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Tasks\Pages\CreateTask::__invoke
* @see Filament/Resources/Tasks/Pages/CreateTask.php:7
* @route '/admin/tasks/create'
*/
CreateTask.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTask.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\CreateTask::__invoke
* @see Filament/Resources/Tasks/Pages/CreateTask.php:7
* @route '/admin/tasks/create'
*/
CreateTask.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTask.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\CreateTask::__invoke
* @see Filament/Resources/Tasks/Pages/CreateTask.php:7
* @route '/admin/tasks/create'
*/
const CreateTaskForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTask.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\CreateTask::__invoke
* @see Filament/Resources/Tasks/Pages/CreateTask.php:7
* @route '/admin/tasks/create'
*/
CreateTaskForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTask.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\CreateTask::__invoke
* @see Filament/Resources/Tasks/Pages/CreateTask.php:7
* @route '/admin/tasks/create'
*/
CreateTaskForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTask.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTask.form = CreateTaskForm

export default CreateTask