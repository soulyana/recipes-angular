import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://live.staticflickr.com/975/42193543501_033ce23ef3_b.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Sauce', 3)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://live.staticflickr.com/975/42193543501_033ce23ef3_b.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Sauce', 3)]
    )
  ];

  constructor(private slsService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // copy of recipe array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slsService.addIngredients(ingredients);
  }
}
