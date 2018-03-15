import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeClick() {
    // this.recipeSelected.emit(); // we don't need to pass the data because parent component has the list of recipes and iterates through it
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
