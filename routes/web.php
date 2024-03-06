<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/qr', function () {
    $routes = collect([
        '/trees',
        '/trees/1',
        '/trees/2',
        '/trees/3',
        '/trees/4',
        '/trees/5',
        '/trees/6',
        '/trees/7',
        '/trees/8',
        '/trees/9',
        '/trees/10',
        '/trees/11',
    ]);

    $utmParameters = [
        'utm_source' => 'qr',
    ];

    return response()->view('qr_codes', compact('routes', 'utmParameters'));
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
