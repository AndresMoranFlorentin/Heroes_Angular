import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//import { HeroesVillanos } from './lista-heroes/';

const URL_SITIO = "https://618aaf2734b4f400177c4818.mockapi.io/info/metahumanos";

@Injectable({
  providedIn: 'root'
})
export class ServicioTablaService {

  private _listapersonajes: HeroesVillanos[] = [];
  listapersonajes: BehaviorSubject<HeroesVillanos[]> = new BehaviorSubject(this._listapersonajes);
  public listaComics: Observable<HeroesVillanos[]> = this.listapersonajes.asObservable();

  constructor(private url_recurso: HttpClient) { }

  
  traerTodo(): Observable<HeroesVillanos[]> {

    return this.url_recurso.get<HeroesVillanos[]>(URL_SITIO);
  }
}
