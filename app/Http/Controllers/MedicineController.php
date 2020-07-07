<?php

namespace App\Http\Controllers;

use App\Medicine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MedicineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            //Get current authenticated user
            $user = Auth::check();
            
            try {
                //Get all applications 
                $medicines = Medicine::all()->count();

                return response()->json($medicines, 201);
                
            } catch (Exception $e) {
                return $this->responseServerError('Error retrieving resource.');
            }
        } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json(["Cannot retrieve authenticated admin"], 401);
        }
    }

    public function getAntibiotics(){

        $antibiotics = Medicine::where('category', 'antibiotic')->count();

        return response()->json($antibiotics, 200);
    }

    public function getPainkillers(){

        $painkillers = Medicine::where('category', 'painkiller')->count();

        return response()->json($painkillers, 200);
    }

    public function getSupplements(){

        $supplements = Medicine::where('category', 'supplement')->count();

        return response()->json($supplements, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Medicine  $medicine
     * @return \Illuminate\Http\Response
     */
    public function show(Medicine $medicine)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Medicine  $medicine
     * @return \Illuminate\Http\Response
     */
    public function edit(Medicine $medicine)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Medicine  $medicine
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Medicine $medicine)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Medicine  $medicine
     * @return \Illuminate\Http\Response
     */
    public function destroy(Medicine $medicine)
    {
        //
    }
}
