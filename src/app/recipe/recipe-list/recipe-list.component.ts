import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  Recipe: Recipe[];
  constructor(private recipeService: RecipeService,private route: ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.Recipe = this.recipeService.recipeFunc();
  }

  newRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
