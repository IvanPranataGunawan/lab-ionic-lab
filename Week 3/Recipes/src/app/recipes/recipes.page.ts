import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = []

  constructor(private RecipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.RecipesService.getAllRecipe();
  }
  
  clickHandle(recipeId){
    console.log(this.RecipesService.getRecipe(recipeId));
  }

  getRecipe(recipeId){
    this.RecipesService.getRecipe(recipeId)
  }

}
