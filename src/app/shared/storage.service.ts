import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';


@Injectable({providedIn:"root"})
export class StorageService{

    
    constructor(private http:HttpClient,private recipeService:RecipeService){
    }
    saveRecipe(){
        const recipe = this.recipeService.recipeFunc()
        this.http.put('https://recipe-app-b1b6a.firebaseio.com/recipes.json',recipe)
            .subscribe(res=>{
                console.log(res);
            })
    }

    getRecipe(){
        this.http.get<Recipe[]>('https://recipe-app-b1b6a.firebaseio.com/recipes.json')
            .subscribe(res=>{
                this.recipeService.setRecipe(res);
            })

    }
}