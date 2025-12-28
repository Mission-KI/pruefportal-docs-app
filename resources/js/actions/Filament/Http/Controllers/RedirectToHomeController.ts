import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/'
*/
const RedirectToHomeController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController.url(options),
    method: 'get',
})

RedirectToHomeController.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/'
*/
RedirectToHomeController.url = (options?: RouteQueryOptions) => {
    return RedirectToHomeController.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/'
*/
RedirectToHomeController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/'
*/
RedirectToHomeController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToHomeController.url(options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/'
*/
const RedirectToHomeControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/'
*/
RedirectToHomeControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/'
*/
RedirectToHomeControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectToHomeController.form = RedirectToHomeControllerForm

export default RedirectToHomeController