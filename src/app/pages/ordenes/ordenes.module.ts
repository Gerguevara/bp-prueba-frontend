import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdenesService } from './ordenes.service';
import { ORDENES_ROUTES } from './ordenes.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalletOrdenComponent } from './detallet-orden/detallet-orden.component';
import { OrdenesComponent } from './main-ordenes/ordenes.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from './modal-form/modal-form.component';



@NgModule({
  declarations: [ OrdenesComponent, DetalletOrdenComponent, ModalFormComponent],
  imports: [CommonModule, ORDENES_ROUTES,  FormsModule, NgxPaginationModule, NgbModalModule,
    ReactiveFormsModule],
  providers: [OrdenesService],
  exports: [ OrdenesComponent, DetalletOrdenComponent]
})
export class OrdenesModule { }
