<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Dimension extends Model
{
    use HasTranslations;

    protected $fillable = [
        'name',
        'short_name'
    ];

    public array $translatable = ['name','short_name'];    
}
