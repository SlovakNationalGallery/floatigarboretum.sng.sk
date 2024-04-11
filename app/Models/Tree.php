<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Tree extends Model
{
    use HasFactory;
    use HasTranslations;

    public $translatable = ['title', 'location', 'story'];
    protected $fillable = ['title', 'location', 'story', 'dating', 'estimated_age', 'estimated_height', 'is_published'];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }
    
}
