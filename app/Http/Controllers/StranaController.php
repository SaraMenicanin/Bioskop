<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StranaController extends Controller
{
    public function pocetna()
    {
        return view('pocetna');
    }
    public function karte()
    {
        return view('karte');
    }
}
