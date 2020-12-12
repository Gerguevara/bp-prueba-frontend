import { DetalletOrdenComponent } from './detallet-orden/detallet-orden.component';
import { OrdenesComponent } from './main-ordenes/ordenes.component';

import { Routes, RouterModule } from '@angular/router';



const ordenesRoutes: Routes = [
  {
    path: 'ordenes',
    component: OrdenesComponent,
  },
  {
    path: 'ordenes/id',
    component: DetalletOrdenComponent
  },
  ]

export const ORDENES_ROUTES = RouterModule.forChild(ordenesRoutes);
