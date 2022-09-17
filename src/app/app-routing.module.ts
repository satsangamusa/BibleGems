import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'content',
    pathMatch: 'full'
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
    
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  // {
  //   path: 'share',
  //   loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  // },
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
