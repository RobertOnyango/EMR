<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'specialization', 'location'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function patient(){
        return $this->belongsToMany(Patient::class, 'doctor_patient');
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
