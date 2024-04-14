<?php

namespace App\Http\Controllers;

use ZipArchive;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QrCodesController extends Controller
{
    public $routes = [
        '/for-visitors',
        '/trees',
        '/informazioni',
        '/trees/1',
        '/trees/2',
        '/trees/3',
        '/trees/4',
        '/trees/5',
        '/trees/6',
        '/trees/7',
        '/trees/8',
        '/trees/9',
        '/trees/10',
        '/trees/11',
    ];

    public $utmParameters = [
        'utm_source' => 'qr',
        'utm_medium' => 'print',
        'utm_campaign' => 'bienale',
    ];

    public function index()
    {
        return response()->view('qr_codes', [
            'routes' => $this->routes,
            'utmParameters' => $this->utmParameters
        ]);
    }

    public function download()
    {
        $tempDirectory = 'temp_qrcodes/';

        $zipFileName = 'download.zip';
        $zipFilePath = storage_path('app/' . $zipFileName);
        $zip = new ZipArchive();

        if ($zip->open($zipFilePath, ZipArchive::CREATE) === true) {

            foreach ($this->routes as $route) {
                $urlWithUtm = url($route) . '?' . http_build_query($this->utmParameters);
                $qrCode = QrCode::size(100)->generate($urlWithUtm);
                $fileName = str_replace('/', '_', $route) . '.svg';
                Storage::put($tempDirectory . $fileName, $qrCode);
                $zip->addFile(storage_path('app/' . $tempDirectory . $fileName), $fileName);
            }

            $zip->close();
            return response()->download($zipFilePath, $zipFileName)->deleteFileAfterSend(true);
        } else {
            return response()->json(['error' => 'Could not create zip file.'], 500);
        }
    }
}
