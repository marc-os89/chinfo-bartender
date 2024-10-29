import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CabecalhoComponent } from "../../components/cabecalho/cabecalho.component";
import { ContainerComponent } from "../../components/container/container.component";
import { RodapeComponent } from "../../components/rodape/rodape.component";
import { Recipe } from './recipes';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    CabecalhoComponent,
    ContainerComponent,
    RodapeComponent
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }
}
