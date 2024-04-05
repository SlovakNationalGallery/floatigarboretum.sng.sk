<?php

namespace App\Http\Controllers;

use App\Models\Tree;
use Illuminate\Http\Request;
use App\Http\Resources\TreeResource;

class TreeController extends Controller
{
    public function index()
    {
        return TreeResource::collection(Tree::where('is_published', true)->get());
    }

    public function show(Tree $tree)
    {
        return new TreeResource($tree);
    }
}
