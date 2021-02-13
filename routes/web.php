<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'StranaController@pocetna');
Route::get('/karte', 'StranaController@karte');

Route::get('/karte/fetch', 'KartaController@fetch_karata');
Route::post('/karte/kupovina', 'KartaController@create_karta');
Route::delete('/karte/izbrisi', 'KartaController@delete_karta');

Route::get('/filmovi/fetch', 'FilmController@fetch_filmova');
Route::get('/filmovi/fetch_karata', 'FilmController@fetch_kupljenih_karata_filma');
