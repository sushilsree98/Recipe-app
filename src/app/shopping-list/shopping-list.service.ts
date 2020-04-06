import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService{
  ingredientChanged = new EventEmitter<Ingredient[]>();

  ingredient: Ingredient[]= [
    new Ingredient("Apple", 20),
    new Ingredient("Mango", 12)
  ];

  ingredientFunc() {
    return this.ingredient.slice();
  }

  addIngredientFunc(ingredient: Ingredient) {
    this.ingredient.push(ingredient);
    this.ingredientChanged.emit(this.ingredient.slice());
  }
}
