import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsListaComponent } from './comics-lista/comics-lista.component';
import { CompraComicsComponent } from './compra-comics/compra-comics.component';
import { DcInfoComponent } from './Editoriales/dc-info/dc-info.component';
import { MarvelInfoComponent } from './Editoriales/marvel-info/marvel-info.component';

const routes: Routes = [
  { path:"",
    redirectTo:"La_lista_de_comics",
    pathMatch:"full"},

  {path:"La_lista_de_comics",
  component:ComicsListaComponent},

  {path:"compraComics",
  component:CompraComicsComponent},
  {path:"dc",
  component:DcInfoComponent},
  {path:"marvel",
  component:MarvelInfoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
