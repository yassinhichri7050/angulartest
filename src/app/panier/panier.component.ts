import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  clickMethod(name: string) {
    if(confirm("Are you sure "+name)) {
      console.log("c'est confirmer ");
    }
  }

}
