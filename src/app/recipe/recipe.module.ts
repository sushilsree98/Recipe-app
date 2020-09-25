import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeComponent } from './recipe.component';

@NgModule({
    declarations: [RecipeComponent, RecipeListComponent,
        RecipeDetailComponent, RecipeItemComponent, RecipeStartComponent,
        RecipeEditComponent],
    imports: [RouterModule, CommonModule, ReactiveFormsModule, RecipeRoutingModule],
})
export class RecipeModule {

}