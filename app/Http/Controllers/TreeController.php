<?php

namespace App\Http\Controllers;

use App\Models\Tree;
use Illuminate\Http\Request;
use App\Http\Resources\TreeResource;

class TreeController extends Controller
{
    public function index(Request $request)
    {
        $perPage = 9; // Number of items per page
        $trees = Tree::published()->paginate($perPage);
        return TreeResource::collection($trees);
    }

    public function show(Tree $tree)
    {
        if (!$tree->is_published) {
            abort(404);
        }
        
        return new TreeResource($tree);
    }
}
