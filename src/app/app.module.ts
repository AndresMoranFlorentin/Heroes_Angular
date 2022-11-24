import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsListaComponent } from './lista-heroes/lista-heroes.component';
import { CompraComicsComponent } from './compra-comics/compra-comics.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MarvelInfoComponent } from './Editoriales/marvel-info/marvel-info.component';
import { DcInfoComponent } from './Editoriales/dc-info/dc-info.component';
import { ComprarComicsService } from './servicio-comics.service';
import { IntroduccionHeroesComponent } from './introduccion-heroes/introduccion-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsListaComponent,
    CompraComicsComponent,
    MarvelInfoComponent,
    DcInfoComponent,
    IntroduccionHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ComprarComicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
