<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

//PRESCRIPTION
class DiagnosisMedicine extends Model
{
    protected $guarded = [];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
