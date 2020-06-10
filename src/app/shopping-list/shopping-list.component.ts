import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredient: Ingredient[];
  shoppingListSub: Subscription
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredient = this.shoppingService.ingredientFunc();
    this.shoppingListSub = this.shoppingService.ingredientChanged
      .subscribe((ingredient: Ingredient[]) => {
        this.ingredient = ingredient;
      })
  }

  onEditItem(index:number){
    this.shoppingService.startedEditing.next(index)
  }

  ngOnDestroy(){
   this.shoppingListSub.unsubscribe(); 
  }

  

}
