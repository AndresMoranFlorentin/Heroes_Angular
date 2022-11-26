import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { comics_para_comprar } from './compra-comics/comics_para_comprar';

@Injectable({
  providedIn: 'root'
})
export class ComprarComicsService {

  private _listaComics: comics_para_comprar[]= [];
  listaHistorietas: BehaviorSubject <comics_para_comprar[]> = new BehaviorSubject(this._listaComics);
  public listaComics:Observable<comics_para_comprar[]> =this.listaHistorietas.asObservable();

  constructor() { 
  }

  addComicTo(articulo: comics_para_comprar) {
    let puntero=this._listaComics.find((valor1)=>valor1.Titulo==articulo.Titulo);
    if(!puntero){
      this._listaComics.push({... articulo});
    }
    else{
      puntero.Pedidos+=articulo.Pedidos;
       } 
    this.listaHistorietas.next(this._listaComics)
  }

}
