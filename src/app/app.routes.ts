import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { VideosComponent } from './pages/videos/videos.component';

export const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'receitas',
    component: RecipesComponent
  },
  {
    path: 'agendamento',
    component: ScheduleComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: "**",
    redirectTo: '',
    pathMatch: 'full'
  }
];
