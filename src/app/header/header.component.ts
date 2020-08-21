import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from '../shared/storage.service';
import { AuthService } from '../auth/auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: "app-header",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  openClass: boolean = false;
  getUser:Subscription
  isAuthenticated:boolean;
  constructor(private storage:StorageService, private authService: AuthService) { }

  ngOnInit(){
    this.getUser = this.authService.user.subscribe(user=>{
      this.isAuthenticated = !!user
    })
  }

  ngOnDestroy(){
    this.getUser.unsubscribe();
  }

  openFunc() {
    this.openClass = !this.openClass;
  }

  saveRecipe(){
    this.storage.saveRecipe();
  }

  fetchRecipe(){
    this.storage.getRecipe().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }
}
