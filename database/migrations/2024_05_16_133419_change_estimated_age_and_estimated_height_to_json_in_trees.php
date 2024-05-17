<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $trees = DB::table('trees')->get();
        foreach ($trees as $tree) {
            $estimatedAge = $tree->estimated_age;
            $estimatedHeight = $tree->estimated_height;

            DB::table('trees')
                ->where('id', $tree->id)
                ->update([
                    'estimated_age' => ($estimatedAge) ? json_encode(['sk' => $estimatedAge]) : null,
                    'estimated_height' => ($estimatedHeight) ? json_encode(['sk' => $estimatedHeight]) : null,
                ]);
        }

        Schema::table('trees', function (Blueprint $table) {
            $table->json('estimated_age')->nullable()->change();
            $table->json('estimated_height')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('trees', function (Blueprint $table) {
            $table->string('estimated_age')->nullable()->change();
            $table->string('estimated_height')->nullable()->change();
        });

        $trees = DB::table('trees')->get();
        foreach ($trees as $tree) {
            $estimatedAge = json_decode($tree->estimated_age, true)['sk'];
            $estimatedHeight = json_decode($tree->estimated_height, true)['sk'];

            DB::table('trees')
                ->where('id', $tree->id)
                ->update([
                    'estimated_age' => $estimatedAge,
                    'estimated_height' => $estimatedHeight,
                ]);
        }
    }
};
