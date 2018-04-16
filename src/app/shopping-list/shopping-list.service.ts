import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>(); // it's better to use Subject
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice(); // if we remove the .slice() we allow saving the changes into our original ingredients array but weemit an event instead
  }

  addIngredient(ingredientData: Ingredient) {
    this.ingredients.push(ingredientData);
    // this.ingredientsChanged.emit(this.ingredients.slice()); // when EventEmitter was set
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // this is good but we emit an event for all the iteration
    // for (let ingredient of ingredients ) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
