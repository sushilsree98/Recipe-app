import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs'

@Injectable()
export class ShoppingListService{
  ingredientChanged = new Subject<Ingredient[]>();

  ingredient: Ingredient[]= [
    new Ingredient("Apple", 20),
    new Ingredient("Mango", 12)
  ];

  ingredientFunc() {
    return this.ingredient.slice();
  }

  addIngredientFunc(ingredient: Ingredient) {
    this.ingredient.push(ingredient);
    this.ingredientChanged.next(this.ingredient.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredient.push(...ingredients);
    this.ingredientChanged.next(this.ingredient.slice());
  }
}
