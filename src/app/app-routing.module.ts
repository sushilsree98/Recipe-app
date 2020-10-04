import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthComponent } from './auth/auth/auth.component';


const routes: Routes = [
  { 
    path:'',
    redirectTo:"/recipe",
    pathMatch:'full'
  },
  {
    path:"recipe",
    loadChildren:()=>import("./recipe/recipe.module").then(m=>m.RecipeModule)
  },
  {
    path:'shoppinglist',
    loadChildren:()=>import('./shopping-list/shopping-list.module').then(m=>m.ShoppingListModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth/auth.module').then(m=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
