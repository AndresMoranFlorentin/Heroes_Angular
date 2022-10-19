import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsListaComponent } from './comics-lista/comics-lista.component';
import { CompraComicsComponent } from './compra-comics/compra-comics.component';

import { FormsModule } from '@angular/forms';
import { MarvelInfoComponent } from './Editoriales/marvel-info/marvel-info.component';
import { DcInfoComponent } from './Editoriales/dc-info/dc-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsListaComponent,
    CompraComicsComponent,
    MarvelInfoComponent,
    DcInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [FormsModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
