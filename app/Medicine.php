<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    protected $guarded = [];

    public function diagnosis()
    {
        return $this->belongsTo(Diagnosis::class, 'diagnosis_medicine');
    }
}
