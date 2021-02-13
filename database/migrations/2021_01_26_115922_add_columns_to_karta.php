<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsToKarta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('karta', function (Blueprint $table) {
            $table->string('rezervisano_na');
            $table->date('datum_rezervacije');
            $table->integer('broj_karata');
            $table->integer('cena');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('karta', function (Blueprint $table) {
            //
        });
    }
}
