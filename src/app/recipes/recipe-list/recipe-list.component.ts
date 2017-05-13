import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
   new Recipe('Feijoada','Delicious Brazilian beans dish.','https://www.magazinefeminina.com/wp-content/uploads/2016/07/receita-de-feijoada.jpg'),
   new Recipe('Feijoada','Delicious Brazilian beans dish.','https://www.magazinefeminina.com/wp-content/uploads/2016/07/receita-de-feijoada.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
