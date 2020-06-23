import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  Recipe: Recipe[];
  Subscription: Subscription
  constructor(private recipeService: RecipeService,private route: ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
    this.Recipe = this.recipeService.recipeFunc();
    this.Subscription = this.recipeService.updatedRecipe
      .subscribe((recipes:Recipe[]) => {
        this.Recipe = recipes
      })
  }

  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }

  newRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
