import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.models';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  ingredients = [
    new Ingredient(1, 'Ingredient 1', 'desc', 1),
    new Ingredient(2, 'Ingredient 2', 'desc', 1.6),
  ];


  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
