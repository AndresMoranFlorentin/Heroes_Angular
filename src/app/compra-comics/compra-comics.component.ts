import { Component, OnInit } from '@angular/core';
import { ComicsListaComponent } from '../lista-heroes/lista-heroes.component';
import { comics_para_comprar } from './comics_para_comprar';

import { NgModule } from '@angular/core';
import { ComprarComicsService } from '../servicio-comics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compra-comics',
  templateUrl: './compra-comics.component.html',
  styleUrls: ['./compra-comics.component.scss']
})
export class CompraComicsComponent implements OnInit {

  factura_titulo="";
  factura_editorial="";
  factura_precio=0;
  factura_pedidos=0;

  comics_compra: comics_para_comprar [] = [
    {
   Titulo:"Guerra Civil",
   Editorial:"Marvel Comic",
   Cantidad:20,
   Precio_Unidad:400,
   tapa:"assets/imagenes_portadas/guerra_civil.jpg",
   Pedidos:0
  },
  {
    Titulo:"La noche Mas Oscura",
    Editorial:"DC",
    Cantidad:50,
    Precio_Unidad:3800,
    tapa:"assets/imagenes_portadas/nochemasoscura.jpg",
    Pedidos:0

   },
   {
    Titulo:"X-Men Apocalipsis",
    Editorial:"Marvel Comic",
    Cantidad:10,
    Precio_Unidad:600,
    tapa:"assets/imagenes_portadas/apocalipse.jpg",
    Pedidos:0

   },
   {
    Titulo:"JLA vs Darkseid",
    Editorial:"DC",
    Cantidad:0,
    Precio_Unidad:4000,
    tapa:"assets/imagenes_portadas/jlaVSDarkseid.jpg",
    Pedidos:0

   },
   {
    Titulo:"Lobo",
    Editorial:"DC",
    Cantidad:0,
    Precio_Unidad:780,
    tapa:"assets/imagenes_portadas/lobo.jpg",
    Pedidos:0

   }
   ,{
    Titulo:"Guerra secreta",
    Editorial:"Marvel",
    Cantidad:17,
    Precio_Unidad:4900,
    tapa:"assets/imagenes_portadas/secretWars.jpg",
    Pedidos:0

   }
   ,{
    Titulo:"Deapool y Cabre vol 1",
    Editorial:"Marvel",
    Cantidad:23,
    Precio_Unidad:3290,
    tapa:"assets/imagenes_portadas/deadpoolYCable.jpg",
    Pedidos:0

   }
   ,{
    Titulo:"Iron Man Blanco vol 1",
    Editorial:"Marvel",
    Cantidad:5,
    Precio_Unidad:1800,
    tapa:"assets/imagenes_portadas/ironMan.jpg",
    Pedidos:0

   }
   ,{
    Titulo:"Flash el regreso",
    Editorial:"DC comic",
    Cantidad:12,
    Precio_Unidad:4500,
    tapa:"assets/imagenes_portadas/flash.jpg",
    Pedidos:0

   }
]
  precio_total=3000;
   constructor(private servicioHistorietas: ComprarComicsService) {
     
  }
   
  ngOnInit(): void {
    console.log(this.servicioHistorietas);
    this.servicioHistorietas.listaComics.subscribe(data=>{
      this.comics_compra;
    })
    this.comics_compra.forEach(comics_compra=>{
      this.precio_total+=comics_compra.Precio_Unidad*comics_compra.Cantidad;
    })
  }
  addComic(compra:comics_para_comprar):void{
    this.servicioHistorietas.addComicTo(compra);

    this.factura_titulo=compra.Titulo;
    this.factura_editorial=compra.Editorial;
    this.factura_pedidos=compra.Pedidos;
    this.factura_precio=compra.Pedidos*compra.Precio_Unidad;

    compra.Cantidad-=compra.Pedidos;

    compra.Pedidos=0;
  }
  reducirPedidos(compra:comics_para_comprar):void{
  if(compra.Cantidad!=0 ){
    if(compra.Pedidos>0){
   compra.Pedidos--;
    }
    }
  }
  aumentarPedidos(compra:comics_para_comprar):void{
    if(compra.Pedidos<compra.Cantidad){
     compra.Pedidos++;
    }
    }
    cambiarValor(event: any ,compra:comics_para_comprar):void{
      if(compra.Pedidos>compra.Cantidad || compra.Pedidos<0){
        console.log("ha ingresado un numero invalido");
        compra.Pedidos=0;
        }
}
      mostrarPedidos(compra:comics_para_comprar):void{
        alert("el total es ; "+compra.Pedidos);
      }
      visto() {
        this.factura_titulo="";
        this.factura_pedidos=0;
      }
}
