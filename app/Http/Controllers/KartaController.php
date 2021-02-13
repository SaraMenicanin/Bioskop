<?php

namespace App\Http\Controllers;

use App\Film;
use App\Karta;
use Illuminate\Http\Request;

class KartaController extends Controller
{
    public function fetch_karata()
    {
        $karte = Karta::all();

        return response()->json([
            'karte' => $karte
        ]);
    }



    public function create_karta(Request $request)
    {
        $rezervisano_na = $request->input('rezervisano_na');
        $broj_karata = $request->input('broj_karata');
        $cena = $request->input('cena');
        $film_id = $request->input('film_id');
        $film = Film::find($film_id);
        $max_karata = $film->max_karata;
        $kupljene_karte = $film->kupljene_karte;
        if ($kupljene_karte + $broj_karata <= $max_karata) {
            Karta::insert([
                'rezervisano_na' => $rezervisano_na,
                'cena' => $cena,
                'broj_karata' => $broj_karata,
                'film_id' => $film_id
            ]);
            Film::find($film_id)->increment('kupljene_karte', $broj_karata);
        }
    }

    public function delete_karta(Request $request)
    {
        $id = $request->input('id');
        $karta = Karta::find($id);


        $film = Karta::find($id)->zaFilm()->get();
        $film_id = $film[0]->id;
        Film::find($film_id)->decrement('kupljene_karte', $karta->broj_karata);
        Karta::find($id)->delete();
    }
}
