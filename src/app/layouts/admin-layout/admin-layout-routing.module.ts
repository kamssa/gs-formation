import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from 'src/app/pages/accueil/accueil.component';
import { InscriptionComponent } from 'src/app/pages/inscription/inscription.component';
import { FormationsComponent } from 'src/app/pages/formations/formations.component';
import { SinglePostComponent } from 'src/app/pages/single-post/single-post.component';
import { ActualiteComponent } from 'src/app/pages/actualite/actualite/actualite.component';
import { EntrepriseComponent } from 'src/app/pages/entreprise/entreprise/entreprise.component';
const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'single-post', component: SinglePostComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: 'entreprise-partenaire', component: EntrepriseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
