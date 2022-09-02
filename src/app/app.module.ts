import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductoComponent } from './components/producto/producto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
//rutas
import { APP_ROUTING } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ClienteComponent,
    ProductoComponent,
    InicioComponent,
    ContactoComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
