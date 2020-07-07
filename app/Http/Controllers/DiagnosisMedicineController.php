<?php

namespace App\Http\Controllers;

use App\DiagnosisMedicine;
use Illuminate\Http\Request;

class DiagnosisMedicineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $diagnosis_medicine = DiagnosisMedicine::create($request->all());
 
        return response()->json($diagnosis_medicine, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\diagnosis_medicine  $diagnosis_medicine
     * @return \Illuminate\Http\Response
     */
    public function show(DiagnosisMedicine $diagnosis_medicine)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\diagnosis_medicine  $diagnosis_medicine
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DiagnosisMedicine $diagnosis_medicine)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\diagnosis_medicine  $diagnosis_medicine
     * @return \Illuminate\Http\Response
     */
    public function destroy(DiagnosisMedicine $diagnosis_medicine)
    {
        //
    }
}
