import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://live.staticflickr.com/975/42193543501_033ce23ef3_b.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://live.staticflickr.com/975/42193543501_033ce23ef3_b.jpg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice(); // copy of recipe array
  }
}
