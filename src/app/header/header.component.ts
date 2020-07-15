import { Component, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../shared/storage.service';
@Component({
  selector: "app-header",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  openClass: boolean = false;
  constructor(private storage:StorageService) { }
  openFunc() {
    this.openClass = !this.openClass;
  }

  saveRecipe(){
    this.storage.saveRecipe();
  }

  fetchRecipe(){
    this.storage.getRecipe().subscribe();
  }
}
