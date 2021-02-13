<?php

namespace App\Http\Controllers;

use App\Film;
use Illuminate\Http\Request;

class FilmController extends Controller
{
    public function fetch_filmova()
    {
        $filmovi = Film::all();

        return response()->json([
            'filmovi' => $filmovi
        ]);
    }

    public function fetch_kupljenih_karata_filma(Request $request)
    {
        $film_id = $request->input('film_id');
        $karte = Film::find($film_id)->karte()->get();

        return response()->json([
            'karte' => $karte
        ]);
    }
}
