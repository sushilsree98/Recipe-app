import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: "app-header",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() menuEvent = new EventEmitter<boolean>();
  menuToggler: boolean = true;
  constructor() { }

recipeClicked() {
  this.menuToggler = true;
  this.menuEvent.emit(this.menuToggler);
  }

  shoppingClicked() {
    this.menuToggler = false;
    this.menuEvent.emit(this.menuToggler);
  }
}
