import { ProductosComponent } from './pages/productos/main-producto/productos.component';
import { OrdenesComponent } from './pages/ordenes/main-ordenes/ordenes.component';
import { PagesComponent } from './pages/pages.component';
import { ClientesComponent } from './pages/clientes/main-clientes/clientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
