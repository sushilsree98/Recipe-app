import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropDownDirective } from './shared/dropdown.directive'
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipe/recipe.service';
import { AuthComponent } from './auth/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { RecipeModule } from './recipe/recipe.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent,  
    DropDownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecipeModule,
    ShoppingListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService,{
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
  exports:[AppRoutingModule]
})
export class AppModule { }
