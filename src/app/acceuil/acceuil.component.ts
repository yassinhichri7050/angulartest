import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {
  title="cards"
  image='https://wallpapercave.com/wp/wp5722053.png'
  image2='https://th.bing.com/th/id/R.da78fe6fb5c5c79134b2f668de9b9679?rik=A1EbOQDR5PQq6Q&pid=ImgRaw&r=0'

}
