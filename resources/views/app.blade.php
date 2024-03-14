<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Floating Arboretum</title>
    <meta name="description"
        content="{{ __('Floating Arboretum is a work by Ota Hudec presented in the Czech and Slovak pavilion at the 60th International Art Exhibition La Biennale di Venezia: Stranieri Ovunque - Foreigners Everywhere.') }}">
    <meta property="og:image" content="{{ asset('ogimage.png') }}">

    @if (app()->environment('production'))
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5GVGFQX7');</script>
        <!-- End Google Tag Manager --> 
    @endif

    {{-- favicon --}}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#4b759a">
    {{-- /favicon --}}

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="bg-blue text-white text-lg h-full">
    @if (app()->environment('production'))
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GVGFQX7"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) --> 
    @endif
    <div id="app"></div>
</body>

</html>
