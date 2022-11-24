import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { Comics } from './compra-comics/comics_para_comprar';

@Injectable({
  providedIn: 'root'
})
export class ComprarComicsService {

  private _listaComics: Comics[]= [];
  listaHistorietas: BehaviorSubject <Comics[]> = new BehaviorSubject(this._listaComics);
  public listaComics:Observable<Comics[]> =this.listaHistorietas.asObservable();

  constructor() { 
  }

  addComicTo(articulo: Comics) {
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
