import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'recipie';
  recipeValue: boolean;

  constructor(private authService: AuthService) {
    
  }
  recipe(event: boolean) {
    this.recipeValue = event;
  }

  ngOnInit(){
    this.authService.autoLogin()
  }
}

