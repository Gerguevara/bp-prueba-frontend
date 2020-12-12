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

  filter( termino: string) {
    return this.http.get<Cliente[]>(`${environment.endpoint_clientes}?nombre=${termino}`);
  }



}
