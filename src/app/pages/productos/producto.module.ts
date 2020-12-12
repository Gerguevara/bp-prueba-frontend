import { ProductosComponent } from './main-producto/productos.component';
import { PRODUCTOS_ROUTES } from './productos.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';



@NgModule({
  declarations: [ ProductosComponent, DetalleProductoComponent],
  imports: [CommonModule, PRODUCTOS_ROUTES],
  exports: [ ProductosComponent, DetalleProductoComponent],
})
export class ProductoModule { }
