import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bar',
    pathMatch: 'full'
  },
  {
    path: 'bar',
    loadChildren: './bar/bar.module#BarPageModule'
  },
  {
    path: 'pie',
    loadChildren: './pie/pie.module#PiePageModule'
  },
  { path: 'pie', loadChildren: './pie/pie.module#PiePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
