import { Component, OnInit } from '@angular/core';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] // now this and its child components will have an access to the RecipeService
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
