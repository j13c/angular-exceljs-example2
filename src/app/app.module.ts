import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloWorld } from './primercomponente/primer.component'; 
import { HelloWorld2 } from './segundocomponente/segundo.componente';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HelloWorld2,
    HolaMundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
