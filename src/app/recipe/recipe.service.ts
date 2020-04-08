import { Injectable, EventEmitter} from "@angular/core";
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected= new EventEmitter<Recipe>();

  recipe: Recipe[] = [
    new Recipe("test recipe", 'this is just a test',
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        new Ingredient("Apple", 8),
        new Ingredient("bun",5)
      ]),
    new Recipe("Another recipe", "Another test desc",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        new Ingredient("Chicken", 2),
        new Ingredient("bun", 5)
      ]
    )
  ]

  constructor(private slService: ShoppingListService) { }

  recipeFunc() {
    return this.recipe.slice();
  }

  addingShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
