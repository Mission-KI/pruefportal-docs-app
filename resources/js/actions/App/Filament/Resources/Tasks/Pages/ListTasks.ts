import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Tasks\Pages\ListTasks::__invoke
* @see Filament/Resources/Tasks/Pages/ListTasks.php:7
* @route '/admin/tasks'
*/
const ListTasks = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTasks.url(options),
    method: 'get',
})

ListTasks.definition = {
    methods: ["get","head"],
    url: '/admin/tasks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Tasks\Pages\ListTasks::__invoke
* @see Filament/Resources/Tasks/Pages/ListTasks.php:7
* @route '/admin/tasks'
*/
ListTasks.url = (options?: RouteQueryOptions) => {
    return ListTasks.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Tasks\Pages\ListTasks::__invoke
* @see Filament/Resources/Tasks/Pages/ListTasks.php:7
* @route '/admin/tasks'
*/
ListTasks.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTasks.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\ListTasks::__invoke
* @see Filament/Resources/Tasks/Pages/ListTasks.php:7
* @route '/admin/tasks'
*/
ListTasks.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTasks.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\ListTasks::__invoke
* @see Filament/Resources/Tasks/Pages/ListTasks.php:7
* @route '/admin/tasks'
*/
const ListTasksForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTasks.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\ListTasks::__invoke
* @see Filament/Resources/Tasks/Pages/ListTasks.php:7
* @route '/admin/tasks'
*/
ListTasksForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTasks.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tasks\Pages\ListTasks::__invoke
* @see Filament/Resources/Tasks/Pages/ListTasks.php:7
* @route '/admin/tasks'
*/
ListTasksForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTasks.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTasks.form = ListTasksForm

export default ListTasks