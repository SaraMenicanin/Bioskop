<?php

use App\Film;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class KartaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 40; $i++) {
            $film_id = rand(1, 10);
            $film = Film::find($film_id);
            $broj_karata_kupujem = rand(1, 3);
            $max_karata = $film->max_karata;
            $kupljene_karte = $film->kupljene_karte;


            if ($kupljene_karte + $broj_karata_kupujem <= $max_karata) {
                DB::table('karta')->insert([
                    'rezervisano_na' => Str::random(6) . " " . Str::random(7),
                    'broj_karata' => $broj_karata_kupujem,
                    'cena' => $film->cena * $broj_karata_kupujem,
                    'film_id' => $film_id,
                ]);
                Film::find($film_id)->increment('kupljene_karte', $broj_karata_kupujem);
            }
        }
    }
}
