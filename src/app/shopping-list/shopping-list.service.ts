import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs'

@Injectable()
export class ShoppingListService{
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredient: Ingredient[]= [];

  ingredientFunc() {
    return this.ingredient.slice();
  }

  getIngredients(index:number){
    return this.ingredient[index];
  }

  addIngredientFunc(ingredient: Ingredient) {
    this.ingredient.push(ingredient);
    this.ingredientChanged.next(this.ingredient.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredient.push(...ingredients);
    this.ingredientChanged.next(this.ingredient.slice());
  }

  updateIngredients(index:number,ingredient:Ingredient){
    this.ingredient[index] = ingredient;
    this.ingredientChanged.next(this.ingredient.slice());
  }

  deleteItems(index:number){
    this.ingredient.splice(index,1);
    this.ingredientChanged.next(this.ingredient.slice());
  }
}
