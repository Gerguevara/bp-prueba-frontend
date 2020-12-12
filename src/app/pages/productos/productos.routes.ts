import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ProductosComponent } from './main-producto/productos.component';
import { Routes, RouterModule } from '@angular/router';



const productosRoutes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'producto/id',
    component: DetalleProductoComponent
  },
  ]

export const PRODUCTOS_ROUTES = RouterModule.forChild(productosRoutes);
