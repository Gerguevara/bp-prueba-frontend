import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import { ClientesComponent } from './main-clientes/clientes.component';
import { Routes, RouterModule } from '@angular/router';



const clietesRoutes: Routes = [

  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'clientes/mostrar/:id',
    component: DetalleClienteComponent
  },
];

export const CLIENTES_ROUTES = RouterModule.forChild(clietesRoutes);
