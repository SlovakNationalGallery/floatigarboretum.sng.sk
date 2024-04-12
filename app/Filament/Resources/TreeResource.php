<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\Tree;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Illuminate\Database\Eloquent\Builder;
use Filament\Resources\Concerns\Translatable;
use App\Filament\Resources\TreeResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\TreeResource\RelationManagers;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;

class TreeResource extends Resource
{
    use Translatable;

    protected static ?string $model = Tree::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required(),
                Forms\Components\TextInput::make('location'),
                Forms\Components\MarkdownEditor::make('story')
                    ->columnSpan('full'),
                Forms\Components\TextInput::make('dating')
                    ->maxLength(255),
                Forms\Components\TextInput::make('estimated_age')
                    ->numeric(),
                Forms\Components\TextInput::make('estimated_height')
                    ->numeric(),
                Forms\Components\Toggle::make('is_published')
                    ->required(),
                SpatieMediaLibraryFileUpload::make('image')->responsiveImages()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                SpatieMediaLibraryImageColumn::make('image'),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('dating')
                    ->sortable(),
                Tables\Columns\TextColumn::make('estimated_age')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('estimated_height')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\IconColumn::make('is_published')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageTrees::route('/'),
        ];
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\LocaleSwitcher::make(),
        ];
    }

}
