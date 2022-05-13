import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/receitas', pathMatch: 'full'},
  {
    path: 'receitas',
    component: RecipesComponent,
    // children: [
    //   { path: 'recipe-detail', component: RecipeDetailComponent },
    //   { path: 'recipe-list', component: RecipeListComponent },
    // ],
  },

  {path: 'carrinho', component: ShoppingListComponent,
    // children: [
    //   { path: 'shopping-edit', component: ShoppingEditComponent },
    // ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
