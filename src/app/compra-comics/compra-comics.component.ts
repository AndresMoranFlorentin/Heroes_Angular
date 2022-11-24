import { Component, OnInit } from '@angular/core';
import { ComicsListaComponent } from '../lista-heroes/lista-heroes.component';
import { Comics } from './comics_para_comprar';

import { NgModule } from '@angular/core';
import { ComprarComicsService } from '../servicio-comics.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-compra-comics',
  templateUrl: './compra-comics.component.html',
  styleUrls: ['./compra-comics.component.scss']
})
export class CompraComicsComponent implements OnInit {
  comics_compra: Comics [] = [
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
  addComic(compra:Comics):void{
    this.servicioHistorietas.addComicTo(compra);
    compra.Cantidad-=compra.Pedidos;
    console.log("el precio de la compra seria: "+compra.Pedidos*compra.Precio_Unidad);
    compra.Pedidos=0;
  }
  reducirPedidos(compra:Comics):void{
  if(compra.Cantidad!=0 ){
    if(compra.Pedidos>0){
   compra.Pedidos--;
    }
  }
  }
  aumentarPedidos(compra:Comics):void{
    if(compra.Pedidos<compra.Cantidad){
     compra.Pedidos++;
    }
    }
    cambiarValor(event: any ,compra:Comics):void{
      if(compra.Pedidos>compra.Cantidad || compra.Pedidos<0){
        console.log("ha ingresado un numero invalido");
        compra.Pedidos=0;
      }

      }
      mostrarPedidos(compra:Comics):void{
        alert("el total es ; "+compra.Pedidos);
      }
}
