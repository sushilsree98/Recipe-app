import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  edit_mode:boolean = false;
  form:FormGroup;
  constructor(private Route:ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.Route.params
     .subscribe((params:Params) =>{
        this.id = +params['id'];
        this.edit_mode = params['id'] != null;
        this.formInit();
     })
  }

  private formInit(){
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    let recipeList = new FormArray([]);
    if(this.edit_mode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredient']){
        for (let ingredient of recipe.ingredient){
          recipeList.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          )
        }
      }
    }
    this.form = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImage),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeList
    })
  }

  get controls(){
    return (<FormArray>this.form.get('ingredients')).controls;
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
