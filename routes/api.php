<?php

use App\Models\Tree;
use Illuminate\Http\Request;
use App\Http\Resources\TreeResource;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('trees', function () {
    return TreeResource::collection(Tree::where('is_published', true)->get());
});

Route::get('trees/{tree}', function (Tree $tree) {
    return new TreeResource($tree);
});
