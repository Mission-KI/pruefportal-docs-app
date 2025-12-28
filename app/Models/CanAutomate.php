<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class CanAutomate extends Model
{
    protected $fillable = [
        'name',
        'description',
    ];

    use HasTranslations;
    public array $translatable = ['name','description'];
}
