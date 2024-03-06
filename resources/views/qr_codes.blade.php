@extends('layouts.blank')

@section('content')
    <div class="mx-12 my-12 max-w-6xl mx-auto">
        <h1 class="font-bold mb-8 pl-8 text-2xl">
            Trees QR codes
        </h1>

        <table class="table-auto border-collapse w-full">
            <thead>
                <tr>
                    <th class="border-b font-bold p-4 pl-8 pt-0 pb-3 text-left">#</th>
                    <th class="border-b font-bold p-4 pl-8 pt-0 pb-3 text-left">URL</th>
                </tr>
            </thead>
            <tbody class="bg-white">
                @foreach ($routes as $route)
                <tr>
                    <td class="border-b border-gray-soft p-4 pl-8">
                        {!! QrCode::size(100)->generate(url($route) . '?' . http_build_query($utmParameters)); !!}
                    </td>
                    <td class="border-b border-gray-soft p-4 pl-8"><a href="{{ url($route) }}" target="_blank" class="underline hover:no-underline">{{ $route }}</a></td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection