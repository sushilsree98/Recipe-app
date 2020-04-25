import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeIngredients: Ingredient[];
  openClass: boolean = false;
  id:number;
  constructor(private shoppingListService:RecipeService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params:Params)=>{
          this.id = +params['id'];
          this.recipe = this.shoppingListService.getRecipe(this.id); 
          this.recipeIngredients = this.recipe.ingredient
        }
      )
  }
  openFunc() {
    this.openClass = !this.openClass;
  }

  addToShoppingList() {
    this.shoppingListService.addingShoppingList(this.recipeIngredients);
  }
}
