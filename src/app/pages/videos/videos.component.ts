import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../components/container/container.component';
import { RodapeComponent } from '../../components/rodape/rodape.component';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [
    CommonModule,
    CabecalhoComponent,
    ContainerComponent,
    RodapeComponent
  ],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {

}
