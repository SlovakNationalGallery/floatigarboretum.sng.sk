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
        $publishedTree = Tree::factory()->create(['is_published' => true]);
        $unpublishedTree = Tree::factory()->create(['is_published' => false]);

        $response = $this->get('/api/trees/' . $publishedTree->id);
        $response->assertStatus(200);

        $response->assertJsonFragment([
            'id' => $publishedTree->id,
        ]);

        // Request the unpublished tree
        $response = $this->get('/api/trees/' . $unpublishedTree->id);
        $response->assertStatus(404);
    }
}
