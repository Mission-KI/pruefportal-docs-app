<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;


class Entry extends Model
{

    use HasTranslations;

    protected $fillable = [
        'name',
        'description',
        'content'
    ];

    public array $translatable = [
        'name',
        'description',
        'content'
    ];    
}
