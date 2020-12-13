import { Cliente } from './../../../models/clientes';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.scss']
})
export class DetalleClienteComponent implements OnInit {

  cliente: Cliente | undefined;

  constructor(private clienteService: ClientesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      console.log('id pasado', params.id);
      this.getcliente(params.id);
    });
  }

  getcliente(id: string): void {
    this.clienteService.getCliente(id).subscribe((data: Cliente) => {
      console.log('data', data);
      this.cliente = data;
      console.log('cliente', this.cliente);
    });
  }


}
