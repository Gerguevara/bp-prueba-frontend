import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/models/productos';

@Injectable()
export class ProductosService {

  constructor(private http: HttpClient) {

  }

  getProductos() {
    return this.http.get<Producto[]>(`${environment.endpoint_productos}?_sort=nombre&_order=asc`);
  }

  getProducto(id: string) {
    return this.http.get<Producto>(`${environment.endpoint_productos}/${id}`);
  }


  filter( termino: string) {
    return this.http.get<Producto[]>(`${environment.endpoint_productos}?nombre=${termino}`);
  }

  crear(producto: Producto) {
    return this.http.post(environment.endpoint_productos, producto);
  }

  editar(id: string, producto: Producto) {
    return this.http.put<Producto>(`${environment.endpoint_productos}/${id}`, producto);
  }

  borrar(id: string) {
    return this.http.delete(`${environment.endpoint_productos}/${id}`);
  }

}
