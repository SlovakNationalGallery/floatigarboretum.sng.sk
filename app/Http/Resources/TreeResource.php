<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TreeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'location' => $this->location,
            'story' => str($this->story)->markdownWithLineBreaks(),
            'dating' => $this->dating,
            'estimated_age' => $this->estimated_age,
            'estimated_height' => $this->estimated_height,
            'image' => new ImageResource($this->getFirstMedia()),
        ];
    }
}
