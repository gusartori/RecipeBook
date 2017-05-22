import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
   new Recipe('Feijoada','Famous and delicious Brazilian beans dish.','https://www.magazinefeminina.com/wp-content/uploads/2016/07/receita-de-feijoada.jpg'),
   new Recipe('Dobradinha','Delicious Brazilian pork dish.','http://s.glbimg.com/po/rc/media/2015/10/18/20_54_15_457_Dobradinha.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
