<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $guarded = [];

    public function doctor(){
        return $this->belongsToMany(Doctor::class, 'doctor_patient');
    }

    public function observation()
    {
        return $this->hasMany(Observation::class);
    }

    public function diagnosis()
    {
        return $this->hasMany(Diagnosis::class);
    } 

    public function diagnosis_medicine()
    {
        return $this->hasMany(DiagnosisMedicine::class);
    }
}
