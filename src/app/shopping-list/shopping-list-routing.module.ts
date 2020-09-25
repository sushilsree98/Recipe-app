import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth/auth.component';
import { ShoppingListComponent } from './shopping-list.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: "/recipe",
        pathMatch: 'full'
    },
    {
        path: "shoppinglist",
        component: ShoppingListComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
