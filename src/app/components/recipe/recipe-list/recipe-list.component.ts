import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipes.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesList: Recipe[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
