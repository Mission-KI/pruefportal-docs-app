<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Method extends Model
{
    /** @use HasFactory<\Database\Factories\MethodFactory> */
    use HasFactory;
    use HasTranslations;  

    protected $fillable = [
        'name',
        'short_name',
        'description',
        'implementation',
        'reference',
        'tools'
    ];

    public function indicators(): BelongsToMany
    {
        return $this->belongsToMany(Indicator::class);
    }
    public function criteria(): BelongsToMany
    {
        return $this->belongsToMany(Criterion::class);
    }    
    public function dimensions(): BelongsToMany 
    {
        return $this->belongsToMany(Dimension::class);
    }
    public function task(): BelongsTo 
    {
        return $this->BelongsTo(Task::class);
    }
    public function complexity(): BelongsTo 
    {
        return $this->BelongsTo(Complexity::class);
    }
    public function dataRequirement(): BelongsTo 
    {
        return $this->BelongsTo(DataRequirement::class);
    }
    public function canAutomate(): BelongsTo 
    {
        return $this->BelongsTo(CanAutomate::class);
    }         
    public function modelAccessRequirement(): BelongsTo 
    {
        return $this->BelongsTo(ModelAccessRequirement::class);
    }
    public function resultComplexity(): BelongsTo 
    {
        return $this->BelongsTo(ResultComplexity::class);
    }

    public array $translatable = [
        'name',
        'short_name',
        'description',
        'implementation',
        'reference',
        'tools'
    ];

}
