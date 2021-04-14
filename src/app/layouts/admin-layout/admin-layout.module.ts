import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from 'src/app/pages/accueil/accueil.component';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { InscriptionComponent } from 'src/app/pages/inscription/inscription.component';
import { FormationsComponent } from 'src/app/pages/formations/formations.component';
import { SinglePostComponent } from 'src/app/pages/single-post/single-post.component';
import { HttpClientModule } from '@angular/common/http';
import { ActualiteComponent } from 'src/app/pages/actualite/actualite/actualite.component';
import { EntrepriseComponent } from 'src/app/pages/entreprise/entreprise/entreprise.component';


@NgModule({
  declarations: [
    AccueilComponent,
    InscriptionComponent,
    FormationsComponent,
    SinglePostComponent,
    ActualiteComponent,
    EntrepriseComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
  ],
  providers: []
})
export class AdminLayoutModule { }
