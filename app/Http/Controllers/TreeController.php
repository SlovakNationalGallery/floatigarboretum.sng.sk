<?php

namespace App\Http\Controllers;

use App\Models\Tree;
use Illuminate\Http\Request;
use App\Http\Resources\TreeResource;

class TreeController extends Controller
{
    public function index()
    {
        return TreeResource::collection(Tree::published()->get());
    }

    public function show(Tree $tree)
    {
        if (!$tree->is_published) {
            abort(404);
        }
        return new TreeResource($tree);
    }
}
