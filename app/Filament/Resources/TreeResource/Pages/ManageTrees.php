<?php

namespace App\Filament\Resources\TreeResource\Pages;

use App\Filament\Resources\TreeResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageTrees extends ManageRecords
{
    use ManageRecords\Concerns\Translatable;

    protected static string $resource = TreeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\LocaleSwitcher::make(),
            Actions\CreateAction::make(),
        ];
    }
}
