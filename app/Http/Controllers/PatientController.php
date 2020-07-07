<?php

namespace App\Http\Controllers;

use App\Patient;
use App\Doctor;
use App\DoctorPatient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PatientController extends Controller
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
                $patients = Patient::all()->count();

                return response()->json($patients, 201);

            } catch (Exception $e) {
                return $this->responseServerError('Error retrieving resource.');
            }
        } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json(["Cannot retrieve authenticated admin"], 401);
        }
    }

    public function malePatients()
    {
        try {
            //Get current authenticated user
            $user = Auth::check();
            
            try {
                //Get all applications 
                $patients = Patient::where('gender', 'Male')->get()->count();

                return response()->json($patients, 201);

            } catch (Exception $e) {
                return $this->responseServerError('Error retrieving resource.');
            }
        } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json(["Cannot retrieve authenticated admin"], 401);
        }
    }

    public function femalePatients()
    {
        try {
            //Get current authenticated user
            $user = Auth::check();
            
            try {
                //Get all applications 
                $patients = Patient::where('age', 'Female')->get()->count();

                return response()->json($patients, 201);
                
            } catch (Exception $e) {
                return $this->responseServerError('Error retrieving resource.');
            }
        } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json(["Cannot retrieve authenticated admin"], 401);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $patient = Patient::create($request->all());
 
        return response()->json($patient, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        return response()->json($patient, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient $patient)
    {
        $patient = Patient::update($request->all());
 
        return response()->json($patient, 201);
    }
}
