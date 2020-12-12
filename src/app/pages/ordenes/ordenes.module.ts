import { ORDENES_ROUTES } from './ordenes.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalletOrdenComponent } from './detallet-orden/detallet-orden.component';
import { OrdenesComponent } from './main-ordenes/ordenes.component';



@NgModule({
  declarations: [ OrdenesComponent, DetalletOrdenComponent],
  imports: [CommonModule, ORDENES_ROUTES],
  exports: [ OrdenesComponent, DetalletOrdenComponent]
})
export class OrdenesModule { }
