import { ProductosService } from './productos.service';
import { ProductosComponent } from './main-producto/productos.component';
import { PRODUCTOS_ROUTES } from './productos.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from './modal-form/modal-form.component';



@NgModule({
  declarations: [ ProductosComponent, DetalleProductoComponent, ModalFormComponent],
  imports: [CommonModule, FormsModule, PRODUCTOS_ROUTES, NgxPaginationModule, NgbModalModule,
    ReactiveFormsModule],
  providers: [ProductosService],
  exports: [ ProductosComponent, DetalleProductoComponent],
})
export class ProductoModule { }
