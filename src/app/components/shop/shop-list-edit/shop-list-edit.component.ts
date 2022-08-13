import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.models';

@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.css']
})
export class ShopListEditComponent implements OnInit {
  @Output() ingredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(name: string, amount: any) {
    this.ingredient.emit(new Ingredient(1, name, 'desc', Number(amount)));
  }

}
