import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/storage.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {

  recipeWasShifted: Recipe = null;
  constructor(private recipeService: RecipeService, private storage: StorageService) { }

  ngOnInit(): void {
    this.storage.getRecipe().subscribe()
  }
}
