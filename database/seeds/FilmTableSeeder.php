<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class FilmTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            $sala = rand(1, 7);
            DB::table('film')->insert([
                'naziv' => Str::random(5),
                'sala' => "SALA " . $sala,
                'datum_odrzavanja' =>  Carbon::today()->addDays(rand(0, 365)),
                'cena' => 100 * rand(5, 20),
                'kupljene_karte' => 0,
                'max_karata' => $sala % 2 * 10 + 20,
            ]);
        }
    }
}
