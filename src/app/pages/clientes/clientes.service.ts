import { Cliente } from './../../models/clientes';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientesService {


  constructor(private http: HttpClient) {
  }

  getClientes(){
    return this.http.get<Cliente[]>(`${environment.endpoint_clientes}?_sort=nombre&_order=asc`);
  }

  getCliente(id: string) {
    return this.http.get<Cliente>(`${environment.endpoint_clientes}/${id}`);
  }


  filter( termino: string) {
    return this.http.get<Cliente[]>(`${environment.endpoint_clientes}?nombre=${termino}`);
  }

  crear(cliente: Cliente) {
    return this.http.post(environment.endpoint_clientes, cliente);
  }

  editar(id: string, cliente: Cliente) {
    return this.http.put<Cliente>(`${environment.endpoint_clientes}/${id}`, cliente);
  }

  borrar(id: string) {
    return this.http.delete(`${environment.endpoint_clientes}/${id}`);
  }

}
