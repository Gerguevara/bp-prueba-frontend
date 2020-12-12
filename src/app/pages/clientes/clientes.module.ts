import { CLIENTES_ROUTES } from './clietes.routes';
import { ClientesComponent } from './main-clientes/clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';



@NgModule({
  declarations: [DetalleClienteComponent, ClientesComponent],
  imports: [CommonModule, CLIENTES_ROUTES],
  exports:[DetalleClienteComponent, ClientesComponent]
})
export class ClientesModule { }
