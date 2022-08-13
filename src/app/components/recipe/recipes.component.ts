import { Component, Output } from "@angular/core";
import { Recipe } from "src/app/models/recipes.models";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent {
  selectRecipe: any = null;
}




