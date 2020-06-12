import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
 
  @ViewChild('f')temForm:NgForm;
  addIngredient: Ingredient;
  isEditing:Subscription;
  canEdit:boolean=false;
  editedItemIndex:number;
  editIngredients:Ingredient

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.isEditing = this.shoppingService.startedEditing
      .subscribe((index:number)=>{
        this.canEdit = true;
        this.editedItemIndex = index;
        this.editIngredients = this.shoppingService.getIngredients(index)
        this.temForm.setValue({
          name:this.editIngredients.name,
          amount:this.editIngredients.amount
        })
    })
  }

  formSubmit(form:NgForm) {
    const value = form.value
    this.addIngredient = new Ingredient(value.name,value.amount)
    if(!this.canEdit){
      this.shoppingService.addIngredientFunc(this.addIngredient);
    }else{
      this.shoppingService.updateIngredients(this.editedItemIndex,this.addIngredient)
      this.canEdit = false;
    }
    this.temForm.reset();

  }

  ngOnDestroy(){
    this.isEditing.unsubscribe();
  }

  onDelete(){
    this.temForm.reset();
    this.shoppingService.deleteItems(this.editedItemIndex)
  }
}
