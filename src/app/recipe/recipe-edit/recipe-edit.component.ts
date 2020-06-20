import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

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
              'name': new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[0-9]+[1-9]*$/)])
            })
          )
        }
      }
    }
    this.form = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImage,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredient': recipeList
    })
  }

  onAddIngredient(){
    (<FormArray>this.form.get('ingredient')).push(
       new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]+[1-9]*$/)])
      })
    )
  }

  get controls(){
    return (<FormArray>this.form.get('ingredient')).controls;
  }

  onSubmit(){
    if(!this.edit_mode){
      this.recipeService.addRecipe(this.form.value)
    }else{
      this.recipeService.updateRecipe(this.id,this.form.value)
    }
  }

}
