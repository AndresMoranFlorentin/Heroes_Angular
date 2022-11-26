import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ServicioTablaService } from 'src/app/servicio-tabla/servicio-tabla.service';
import { heroes_villanos } from '../heroes_villanos';

@Component({
  selector: 'app-form-editar',
  templateUrl: 'form-editar.component.html',
  styleUrls: ['form-editar.component.scss']
})
export class FormEditarComponent implements OnInit {

  error=false;
  personaje = new FormGroup({
    nombre: new FormControl('', Validators.required),
    definicion: new FormControl('', Validators.required),
    poder: new FormControl('', [Validators.required, Validators.min(1)]),
    benigno: new FormControl()
  });

  constructor(private ServicioHeroes: ServicioTablaService, private router: Router) { }

  ngOnInit(): void {
  }
  crear() {
    console.log(this.personaje.value);

    if (this.personaje.valid) {

      this.ServicioHeroes.create(this.personaje.value).subscribe(res => res = res)
     console.log("se añadio con exito");
     this.error=false;
     this.router.navigate(["/La_lista_de_comics"]);
    }
    else{
      console.log("valores invalidos....");
      this.error=true;

    }
    this.personaje.reset();
   
     //this.router1.navigateByUrl("/compraComics");
  }


}
