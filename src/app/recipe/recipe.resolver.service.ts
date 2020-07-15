import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
import { StorageService } from '../shared/storage.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(private storage:StorageService, private recipeService:RecipeService ) { 
    
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.recipeFunc();
    if(recipes.length === 0){
      return this.storage.getRecipe();
    }else{
      return recipes;
    }
  }
}
