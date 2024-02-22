<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Floating Arboretum</title>
    <meta name="description"
        content="Floating Arboretum je dielo Ota Hudeca prezentované v českom a slovenskom pavilóne na 60. medzinárodnej výstave umenia La Biennale di Venezia: Stranieri Ovunque - Foreigners Everywhere.">
    <meta property="og:image" content="{{ asset('ogimage.png') }}">

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="bg-blue-dark text-blue-darkest">
    <div id="app"></div>
</body>

</html>
