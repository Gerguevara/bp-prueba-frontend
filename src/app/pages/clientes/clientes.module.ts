import { ClientesService } from './clientes.service';
import { CLIENTES_ROUTES } from './clietes.routes';
import { ClientesComponent } from './main-clientes/clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DetalleClienteComponent, ClientesComponent, ModalFormComponent],
  imports: [CommonModule, FormsModule, CLIENTES_ROUTES, NgxPaginationModule, NgbModalModule,
    ReactiveFormsModule],
  providers: [ClientesService],
  exports:[DetalleClienteComponent, ClientesComponent, ModalFormComponent]
})
export class ClientesModule { }
