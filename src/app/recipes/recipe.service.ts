import {Recipe} from './recipe.model';

export class RecipeService {
  // making recipes private we disallow to access the array from the outside
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg'),
    new Recipe('Another test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg')
  ];

    getRecipes() {
      return this.recipes.slice();
    }
}
