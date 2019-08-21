import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageURL: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSriC8',
      ingredient: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageURL: 'https://awsimages.detik.net.id/community/media/visual/2018/10/25/06b8cfa8-b062-42a0-a646-769e8d12bffd.jpeg?a=1',
      ingredient: ['Ketupat', 'Telor', 'Labu', 'Santan', 'Tempe', 'Tahu']
    },
    {
      id: 'r3',
      title: 'Pizza Margerita',
      imageURL: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--51643_11.jpg?itok=I_hF8vFL',
      ingredient: ['Dough', 'Tomato Sauce', 'Mozzarella', 'Basil leaves', 'Parmesan']
    }
  ]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return this.recipes.find(r=>r.id==recipeId)
  }

  deleteRecipe(recipeId: string){
    var findRecipe = this.recipes.find(r => r.id == recipeId);
    var index = this.recipes.indexOf(findRecipe);

    if(index !== -1){
      return this.recipes.splice(index, 1);
    }
  }
}
