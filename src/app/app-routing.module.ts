import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './application/accueil/accueil.component';
import { AjoutemployeComponent } from './application/ajoutemploye/ajoutemploye.component';
import { ErreurComponent } from './application/erreur/erreur.component';
import { ListemployesComponent } from './application/listemployes/listemployes.component';
import { SelectedemployeComponent } from './application/selectedemploye/selectedemploye.component';

const routes: Routes = [
  { path:'accueil', component:AccueilComponent},
  { path:'lesemployes', component:ListemployesComponent},
  { path:'lesemployes/:id', component:SelectedemployeComponent},
  { path:'ajoutemploye', component:AjoutemployeComponent},
  { path:'', redirectTo:'accueil', pathMatch:'full'},
  { path:'**', component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
