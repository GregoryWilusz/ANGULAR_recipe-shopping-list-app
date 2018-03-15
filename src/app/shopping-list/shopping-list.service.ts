import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice(); // if we remove the .slice() we allow saving the changes into our original ingredients array but weemit an event instead
  }

  addIngredient(ingredientData: Ingredient) {
    this.ingredients.push(ingredientData);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
