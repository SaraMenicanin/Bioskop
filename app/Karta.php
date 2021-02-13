<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Karta extends Model
{
    protected $table = "karta";
    public $timestamps = false;

    public function zaFilm()
    {
        return $this->belongsTo('App\Film', 'film_id', 'id');
    }
}
