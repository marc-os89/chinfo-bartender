import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabecalhoComponent } from "../../components/cabecalho/cabecalho.component";
import { ContainerComponent } from "../../components/container/container.component";
import { RodapeComponent } from "../../components/rodape/rodape.component";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    CommonModule,
    CabecalhoComponent,
    ContainerComponent,
    RodapeComponent
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

}
