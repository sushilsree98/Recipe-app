import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

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
    if(this.edit_mode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDescription = recipe.description;
    }
    this.form = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImage),
      'description': new FormControl(recipeDescription)
    })
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
