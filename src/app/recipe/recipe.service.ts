import { Injectable, EventEmitter} from "@angular/core";
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  // recipe: Recipe[] = [
  //   new Recipe("test recipe", 'this is just a test',
  //     "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
  //     [
  //       new Ingredient("Apple", 8),
  //       new Ingredient("bun",5)
  //     ]),
  //   new Recipe("Another recipe", "Another test desc",
  //     "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
  //     [
  //       new Ingredient("Chicken", 2),
  //       new Ingredient("bun", 5)
  //     ]
  //   )
  // ]

    recipe: Recipe[] = [];

  constructor(private slService: ShoppingListService) { }
  updatedRecipe = new Subject<Recipe[]>();
  recipeFunc() {
    return this.recipe.slice();
  }

  setRecipe(recipe){
    this.recipe = recipe;
    this.updatedRecipe.next(this.recipe.slice())
  }

  getRecipe(index:number){
    return this.recipe[index];
  }

  addingShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipe.push(recipe)
    return this.updatedRecipe.next(this.recipe.slice());
  }

  updateRecipe(id:number, recipe:Recipe){
    this.recipe[id] = recipe;
    return this.updatedRecipe.next(this.recipe.slice());
  }

  deleteRecipe(index:number){
    this.recipe.splice(index,1);
    return this.updatedRecipe.next(this.recipe.slice());
  }
}
