<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Tree;

class TreeApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_get_all_trees()
    {
        $response = $this->get('/api/trees');

        $response->assertStatus(200);
    }

    public function test_get_single_tree()
    {
        $tree = Tree::factory()->create();

        $response = $this->get('/api/trees/' . $tree->id);

        $response->assertStatus(200);
    }
}
