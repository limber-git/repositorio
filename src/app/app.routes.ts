import { RouterModule,Routes } from "@angular/router";
import { ClienteComponent } from './components/cliente/cliente.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TiendaComponent } from './components/tienda/tienda.component';


const APP_routes:Routes = [
    {path:'cliente', component:ClienteComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'enzabezado', component:EncabezadoComponent},
    {path:'producto', component:ProductoComponent},
    {path:'tienda', component:TiendaComponent},
    {path:'inicio', component:InicioComponent},
    {path:'**',pathMatch:'full',redirectTo:'inicio'}
];
export const APP_ROUTING=RouterModule.forRoot(APP_routes);