<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;


class Criterion extends Model
{
    use HasTranslations;

    public function dimension(): BelongsTo
    {
        return $this->BelongsTo(Dimension::class);
    }    

    public array $translatable = [
        'name', 'short_name'
    ];
    /*
    public array $fillable = [
        'name',
        'short_name'
    ];*/    
}
