import { Component, OnInit } from '@angular/core';
import { ComicsListaComponent } from '../comics-lista/comics-lista.component';
import { comics } from '../comics-lista/ListadoComics';
import { ListaDeCompras } from '../compra-comics/ListaDeCompras';

import { NgModule } from '@angular/core';


@Component({
  selector: 'app-compra-comics',
  templateUrl: './compra-comics.component.html',
  styleUrls: ['./compra-comics.component.scss']
})
export class CompraComicsComponent implements OnInit {
  comics_compra: ListaDeCompras [] = [
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
  constructor() { }

 
   
  
  ngOnInit(): void {
    this.comics_compra.forEach(comics_compra=>{
      this.precio_total+=comics_compra.Precio_Unidad*comics_compra.Cantidad;
    })
  }
  reducirPedidos(compra:ListaDeCompras):void{
  if(compra.Cantidad!=0 ){
    if(compra.Pedidos>0){
   compra.Pedidos--;
    }
  }
  }
  aumentarPedidos(compra:ListaDeCompras):void{
    if(compra.Pedidos<compra.Cantidad){
     compra.Pedidos++;
    }
    }
    cambiarValor(event ,compra:ListaDeCompras):void{
      if(compra.Pedidos>compra.Cantidad || compra.Pedidos<0){
        alert("A ingresado un numero de pedidos demasiado grande debe cambiarlo (>:)");
        
      }
      console.log(compra.Pedidos);
      }
      mostrarPedidos(compra:ListaDeCompras):void{
        console.log("el total es ; "+compra.Pedidos);
      }
}
