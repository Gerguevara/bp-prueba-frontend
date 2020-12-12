import { OrdenesModule } from './ordenes/ordenes.module';
import { PAGES_ROUTES } from './pages.routes';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SidebarModule } from 'ng-sidebar';
import { ClientesModule } from './clientes/clientes.module';
import { ProductoModule } from './productos/producto.module';



@NgModule({
  declarations: [ PagesComponent],
  imports: [CommonModule, SharedModule, SidebarModule, AppRoutingModule, ClientesModule,
              OrdenesModule, ProductoModule , PAGES_ROUTES],
  exports: [ PagesComponent ]
})
export class PagesModule { }
