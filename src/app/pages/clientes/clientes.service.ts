import { Cliente } from './../../models/clientes';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientesService {


  constructor(private http: HttpClient) {
    console.log(' servicio working');
  }

  getClientes(){
    return this.http.get<Cliente[]>(environment.endpoint_clientes);
  }

  getCliente(id: string) {
    console.log('url', `${environment.endpoint_clientes}/${id}`);
    return this.http.get<Cliente>(`${environment.endpoint_clientes}/${id}`);
  }


  filter( termino: string) {
    return this.http.get<Cliente[]>(`${environment.endpoint_clientes}?nombre=${termino}`);
  }

  crear(cliente: Cliente) {
    return this.http.post(environment.endpoint_clientes, cliente);
  }



}
