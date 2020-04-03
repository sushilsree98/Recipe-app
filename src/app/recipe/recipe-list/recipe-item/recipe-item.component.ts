import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeKey;
  @Output() recipeSelected= new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected() {
    this.recipeSelected.emit();
  }

}
