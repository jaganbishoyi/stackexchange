import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './shared/layouts/admin/admin.component';

const routes: Routes = [
  {
    path: 'views',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
];

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'views',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminComponent,
    children: routes,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
