import { Cliente } from './../../../models/clientes';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  termino = '';
  error = false;
  p = 1;
  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.fetchClientes();
  }


  // hace fetch de todos los clientes
  fetchClientes(): void {
    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

// fetch de cliente que cumpla con el parametro nombre
  buscar(): void {
    if (this.termino.trim().length === 0) {
      this.fetchClientes();
    } else {
      this.clientesService.filter(this.termino).subscribe(data => {
        this.clientes = data;
      });
    }
  }

}
