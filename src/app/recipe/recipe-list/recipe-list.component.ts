import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeShift = new EventEmitter<Recipe>();
  Recipe: Recipe[] = [
    new Recipe("test recipe", 'this is just a test',"https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("Another recipe", "Another test desc","https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(event: Recipe) {
    this.recipeShift.emit(event);
  }

}
