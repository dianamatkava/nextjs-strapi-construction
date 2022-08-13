import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipes.models';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails = new Recipe(1, '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
