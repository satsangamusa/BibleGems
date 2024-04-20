import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'content',
    loadComponent: () => import('./content/content.page').then( m => m.ContentPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },


  {
    path: 'videos',
    loadComponent: () => import('./videos/videos.page').then( m => m.VideosPage)
  }

];
