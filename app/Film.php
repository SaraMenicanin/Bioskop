<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    protected $table = "film";
    public $timestamps = false;

    public function karte()
    {
        return $this->hasMany('App\Karta');
    }
}
