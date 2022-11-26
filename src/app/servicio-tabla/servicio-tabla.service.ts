import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { heroes_villanos } from '../lista-heroes/heroes_villanos';

const URL_SITIO = "https://618aaf2734b4f400177c4818.mockapi.io/info/metahumanos";

@Injectable({
  providedIn: 'root'
})
export class ServicioTablaService {

  create(nuevoPersonaje) {
    
    return this.url_recurso.post(URL_SITIO,nuevoPersonaje);
  }

  delete(id: number) {

    return this.url_recurso.delete(URL_SITIO+"/"+id);
  }
  editar(nuevoPer:heroes_villanos){

    return this.url_recurso.put(this.url_recurso+"/"+nuevoPer.id,nuevoPer);
  }
  constructor(private url_recurso: HttpClient) { 

  }
  traerTodo(): Observable<heroes_villanos[]> {

    return this.url_recurso.get<heroes_villanos[]>(URL_SITIO);

  }

}
