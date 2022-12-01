import { Component, OnInit } from '@angular/core';
import { ServicioTablaService } from '../../servicio-tabla/servicio-tabla.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

//import { ServicioTablaService } from '../app/servicio-tabla/servicio-tabla.service';

//src\app\servicio-tabla\servicio-tabla.service.ts
@Component({
  selector: 'app-form-add',
  templateUrl: 'form-add.component.html',
  styleUrls: ['form-add.component.scss']
})
export class FormAddComponent implements OnInit {

  error=false;
  personaje = new FormGroup({
    nombre: new FormControl('', Validators.required),
    definicion: new FormControl('', Validators.required),
    poder: new FormControl('', [Validators.required, Validators.min(1)]),
    benigno: new FormControl('',Validators.required)
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
