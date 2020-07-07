<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/patients/males', 'PatientController@malePatients');
Route::get('/patients/females', 'PatientController@femalePatients');
Route::apiResource('/patients', 'PatientController');

Route::get('/medicines/antibiotics', 'MedicineController@getAntibiotics');
Route::get('/medicines/painkillers', 'MedicineController@getPainkillers');
Route::get('/medicines/supplements', 'MedicineController@getSupplements');
Route::apiResource('/medicines', 'MedicineController');

Route::apiResource('/observation', 'ObservationController');

Route::get('/diagnosis/admitted', 'DiagnosisController@getAdmissions');
Route::get('/diagnosis/released', 'DiagnosisController@getNotAdmitted');
Route::apiResource('/diagnosis', 'DiagnosisController');

Route::apiResource('/prescription', 'DiagnosisMedicineController');