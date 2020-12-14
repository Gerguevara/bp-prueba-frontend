import { Orden } from './../../models/ordenes';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private http: HttpClient) { }

  getOrdenes() {
    return this.http.get< Orden[]>(environment.endpoint_ordenes);
  }

  getOrden(id: string) {
    return this.http.get <Orden>(`${environment.endpoint_ordenes}/${id}`);
  }


  filter( termino: string) {
    return this.http.get< Orden[]>(`${environment.endpoint_ordenes}?fecha=${termino}`);
  }

  crear(producto: Orden) {
    return this.http.post(environment.endpoint_ordenes, producto);
  }

  editar(id: string, producto: Orden) {
    return this.http.put <Orden>(`${environment.endpoint_ordenes}/${id}`, producto);
  }

  borrar(id: string) {
    return this.http.delete(`${environment.endpoint_ordenes}/${id}`);
  }

}

