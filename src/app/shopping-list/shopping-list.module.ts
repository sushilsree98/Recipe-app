import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
    declarations: [ShoppingListComponent, ShoppingEditComponent],
    imports: [RouterModule, CommonModule, ReactiveFormsModule, ShoppingListRoutingModule, FormsModule],
})
export class ShoppingListModule {

}