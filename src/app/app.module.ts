import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './application/accueil/accueil.component';
import { ErreurComponent } from './application/erreur/erreur.component';
import { EmployeComponent } from './application/employe/employe.component';
import { SelectedemployeComponent } from './application/selectedemploye/selectedemploye.component';
import { ListemployesComponent } from './application/listemployes/listemployes.component';
import { MenuComponent } from './application/menu/menu.component';
import { AjoutemployeComponent } from './application/ajoutemploye/ajoutemploye.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifemployeComponent } from './application/modifemploye/modifemploye.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ErreurComponent,
    EmployeComponent,
    SelectedemployeComponent,
    ListemployesComponent,
    MenuComponent,
    AjoutemployeComponent,
    ModifemployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
