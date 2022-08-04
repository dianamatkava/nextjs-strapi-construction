import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipes.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesList: Recipe[] = [
    new Recipe(1, 'Test Recipe 1', 'desc', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/easy-egg-recipes-1582902639.png?crop=0.670xw:0.834xh;0.218xw,0.0858xh&resize=640:*'),
    new Recipe(2, 'Test Recipe 2', 'desc', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mike-garten-egg-ideas-basil-arugla-egg-toast-0417-1515526945.jpg?crop=1xw:1xh;center,top&resize=480:*')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
