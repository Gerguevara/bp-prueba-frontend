import { OrdenesComponent } from './main-ordenes/ordenes.component';

import { Routes, RouterModule } from '@angular/router';



const ordenesRoutes: Routes = [
  {
    path: 'ordenes',
    component: OrdenesComponent,
  }
  ]

export const ORDENES_ROUTES = RouterModule.forChild(ordenesRoutes);
