import { NotFoundComponent } from './../not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
  {
    path: 'mi-tienda',
    component: PagesComponent,
    children: [
      {
        path: '', redirectTo: '/mi-tienda/clientes', pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: '',
        loadChildren: () => import('./ordenes/ordenes.module').then(m => m.OrdenesModule)
      },
      {
        path: '',
        loadChildren: () => import('./productos/producto.module').then(m => m.ProductoModule)
      },
    ]
  },
  {
    path: '', redirectTo: '/mi-tienda/clientes', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
