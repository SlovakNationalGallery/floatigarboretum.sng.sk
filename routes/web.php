<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QrCodesController;
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

Route::get('/qr', [QrCodesController::class, 'index'])->name('qr.index');
Route::get('/qr/download', [QrCodesController::class, 'download'])->name('qr.download');

Route::redirect('/downloads/curator_text_undefined.pdf', '/downloads/curator_text_en.pdf', 301);

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
