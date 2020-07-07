<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Diagnosis extends Model
{
    protected $guarded = [];

    public function diagnosis()
    {
        return $this->belongsTo(Diagnosis::class);
    }

     public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function medicine()
    {
        return $this->belongsTo(Medicine::class, 'diagnosis_medicine');
    }
}
