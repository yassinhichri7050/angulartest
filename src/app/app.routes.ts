import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CommandeComponent } from './commande/commande.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
 { path:'acceuil',
  component:AcceuilComponent,
},
{ path:'commande',
  component:CommandeComponent,
},
{ path:'connexion',
  component:ConnexionComponent,
},
{ path:'inscription',
  component:InscriptionComponent,
},
{ path:'panier',
  component:PanierComponent,
},

];
