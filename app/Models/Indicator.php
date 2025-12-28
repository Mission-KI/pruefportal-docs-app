<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Indicator extends Model
{
    use HasTranslations;

    public function dimension(): BelongsTo
    {
        return $this->BelongsTo(Dimension::class);
    }
    public function criterion(): BelongsTo
    {
        return $this->BelongsTo(Criterion::class);
    }
    public function methods(): BelongsToMany
    {
        return $this->belongsToMany(Method::class);
    }

    public array $translatable = [
        'name',
        'short_name',
        'requirement',
        'a',
        'b',
        'c',
        'd',
        'additional_info',
        'reference',
        'type',
        'weighting',
        'links'
    ];

    /*
    public array $fillable = [
        'name',
        'short_name',
        'requirement',
        'a',
        'b',
        'c',
        'd',
        'additional_info',
        'reference',
        'type',
        'weighting',
        'links'
    ];   */ 
}
