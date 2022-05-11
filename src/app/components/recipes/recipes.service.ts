import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'a simple test', 'https://cdn.pixabay.com/photo/2016/04/01/09/52/cartoon-1299636_960_720.png'),
    new Recipe('test2', 'another test', 'https://cdn.pixabay.com/photo/2016/04/01/09/52/cartoon-1299636_960_720.png')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
