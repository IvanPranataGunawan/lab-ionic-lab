import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = []

  constructor(private RecipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.RecipesService.getAllRecipes();
  }

  clickHandle(recipeId){
    console.log(this.RecipesService.getRecipe(recipeId));
  }

  deleteRecipe(recipeId){
    this.RecipesService.deleteRecipe(recipeId);
  }
}
