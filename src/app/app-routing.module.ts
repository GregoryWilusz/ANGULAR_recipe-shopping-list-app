import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesStartComponent} from './recipes/recipes-start/recipes-start.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuardService} from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // only redirect when the FULL PATH is EMPTY ('')
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipesStartComponent},
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
      { path: ':id', component: RecipeDetailComponent},
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
