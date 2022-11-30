import { Component, OnInit } from '@angular/core';
import { ServicioTablaService } from '../servicio-tabla/servicio-tabla.service';
import { heroes_villanos} from './heroes_villanos';
import { FormAddComponent } from './form-add/form-add.component';
import { CompraComicsComponent } from '../compra-comics/compra-comics.component';
@Component({
  selector: 'app-comics-lista',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.scss']
})
export class ComicsListaComponent implements OnInit {


  personajes: heroes_villanos [] = [];
   
  constructor(private ServicioHeroes:ServicioTablaService) { }

  ngOnInit(): void {
    this.ServicioHeroes.traerTodo().
    subscribe(personajes=>this.personajes=personajes);
   
  }
  borrar(personaje:heroes_villanos):void{
    console.log("el id de esta fila es : "+personaje.id)
    this.ServicioHeroes.delete(personaje.id).subscribe(
      res=>this.ServicioHeroes.traerTodo().subscribe(
        response=>this.personajes=response
      )
    );
    }
 /* editar(personaje:heroes_villanos):void{
    console.log("nombre: "+personaje.nombre+" , poder: "+personaje.poder+" , id: "+personaje.id)
  }*/
  VillanoOHeroe(per:heroes_villanos) {
  
   if(per.benigno == true){
     return "Heroe";
    }
     return "Villano";
  }
  
}
