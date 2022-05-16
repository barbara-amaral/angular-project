import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-edit/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe(
      'Arroz carreteiro',
      'Um delicioso arroz carreteiro!',
      'https://img-global.cpcdn.com/recipes/5c8f29630541e732/1200x630cq70/photo.jpg',
      [new Ingredient('arroz', 1), new Ingredient('carne seca', 1)]
    ),
    new Recipe(
      'Bolo de cenoura',
      'Ótimo para comer no café da tarde!',
      'https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?w=1200',
      [new Ingredient('farinha de trigo', 1), new Ingredient('cenoura', 3)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
 }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
