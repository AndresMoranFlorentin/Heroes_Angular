import { Component, OnInit } from '@angular/core';
import { ServicioTablaService } from '../servicio-tabla/servicio-tabla.service';

@Component({
  selector: 'app-comics-lista',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.scss']
})
export class ComicsListaComponent implements OnInit {

  personajes: HeroesVillanos [] = [];

   
  constructor(private ServicioHeroes:ServicioTablaService) { }

  ngOnInit(): void {
    this.ServicioHeroes.traerTodo().
    subscribe(personajes=>this.personajes=personajes);
   
  }

}
