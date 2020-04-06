import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeIngredients: Ingredient[];
  openClass: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.recipeIngredients=this.recipe.ingredient;
  }
  openFunc() {
    this.openClass = !this.openClass;
  }
}
