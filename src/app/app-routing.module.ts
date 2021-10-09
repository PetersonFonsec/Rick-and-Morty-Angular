import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'character',
  },
  {
    path: 'character',
    data: {
      animation: 'CharacterPage',
    },
    loadChildren: () =>
      import('./character/character.module').then((m) => m.CharacterModule),
  },
  {
    path: 'episode',
    data: {
      animation: 'EpisodePage',
    },
    loadChildren: () =>
      import('./episode/episode.module').then((m) => m.EpisodeModule),
  },
  {
    path: 'location',
    data: {
      animation: 'LocationPage',
    },
    loadChildren: () =>
      import('./location/location.module').then((m) => m.LocationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
