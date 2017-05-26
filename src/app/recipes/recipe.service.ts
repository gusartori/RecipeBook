import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    private recipes:Recipe[] = [
    new Recipe('Feijoada',
    'Famous and delicious Brazilian beans dish.',
    'https://www.magazinefeminina.com/wp-content/uploads/2016/07/receita-de-feijoada.jpg',
    [
        new Ingredient('Pork Meat', 1),
        new Ingredient('Beans', 1)
    ]),
    new Recipe('Dobradinha',
    'Delicious Brazilian pork dish.',
    'http://s.glbimg.com/po/rc/media/2015/10/18/20_54_15_457_Dobradinha.jpg',
    [
        new Ingredient('Jerk meat', 1),
        new Ingredient('White Beans', 1)
    ])
    ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService){

    }
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingrediets: Ingredient[]){
        this.slService.addIngredients(ingrediets);
    }

}