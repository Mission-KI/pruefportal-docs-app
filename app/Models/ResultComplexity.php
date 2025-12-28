<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class ResultComplexity extends Model
{
    use HasTranslations;
    public array $translatable = ['name','description'];
    protected $fillable = [
        'name',
        'description',
    ];         
}
