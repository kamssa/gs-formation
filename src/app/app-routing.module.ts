import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { NewCompteComponent } from './pages/new-compte/new-compte.component';
const routes: Routes = [
/*   { path: '', redirectTo: 'accueil', pathMatch: 'full'}, */
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('./layouts/admin-layout/admin-layout.module').then (m => m.AdminLayoutModule)
      }
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'new-compte', component: NewCompteComponent}
/*   {
    path: '**',
    redirectTo: 'accueil'
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
