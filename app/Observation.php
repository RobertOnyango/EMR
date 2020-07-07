<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Observation extends Model
{
    protected $guarded = [];
    
    public function diagnosis()
    {
        return $this->hasOne(Diagnosis::class);
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

}
