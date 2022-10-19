import { Component, OnInit } from '@angular/core';
import { comics } from './ListadoComics';

@Component({
  selector: 'app-comics-lista',
  templateUrl: './comics-lista.component.html',
  styleUrls: ['./comics-lista.component.scss']
})
export class ComicsListaComponent implements OnInit {

  comics: comics [] = [
    {
   Titulo:"Guerra Civil",
   Editorial:"Marvel Comic",
   Cantidad:20,
   Precio_Unidad:400,
   tapa:"assets/imagenes_portadas/guerra_civil.jpg",

  },
  {
    Titulo:"La noche Mas Oscura",
    Editorial:"DC",
    Cantidad:50,
    Precio_Unidad:3800,
    tapa:"assets/imagenes_portadas/nochemasoscura.jpg",

   },
   {
    Titulo:"X-Men Apocalipsis",
    Editorial:"Marvel Comic",
    Cantidad:10,
    Precio_Unidad:600,
    tapa:"assets/imagenes_portadas/apocalipse.jpg",

   },
   {
    Titulo:"JLA vs Darkseid",
    Editorial:"DC",
    Cantidad:0,
    Precio_Unidad:4000,
    tapa:"assets/imagenes_portadas/jlaVSDarkseid.jpg",

   }
]
  constructor() { }

  ngOnInit(): void {
  }

}
