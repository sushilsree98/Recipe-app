import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredient[]=[
    new Ingredient("Apple", 20),
    new Ingredient("Mango",12)

  ];
  constructor() { }

  ngOnInit(): void {
  }

  ingredientFunc(event: { name: string, amount: number }) {
    this.ingredient.push(new Ingredient(event.name,event.amount));
  }

}
