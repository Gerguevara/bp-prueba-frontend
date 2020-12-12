import { ClientesService } from './clientes.service';
import { CLIENTES_ROUTES } from './clietes.routes';
import { ClientesComponent } from './main-clientes/clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [DetalleClienteComponent, ClientesComponent],
  imports: [CommonModule, FormsModule, CLIENTES_ROUTES, NgxPaginationModule],
  providers: [ClientesService],
  exports:[DetalleClienteComponent, ClientesComponent]
})
export class ClientesModule { }
