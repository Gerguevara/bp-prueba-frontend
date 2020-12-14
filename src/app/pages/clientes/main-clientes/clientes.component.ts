import { ModalFormComponent } from './../modal-form/modal-form.component';
import { Cliente } from './../../../models/clientes';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private clientesService: ClientesService, private modalService: NgbModal) { }

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
  // abre modal para crear un cliente
  open(): void {
      const modalRef = this.modalService.open(ModalFormComponent, { centered: true });
      modalRef.result.then((data) => {
        this.fetchClientes();
      }, (reason) => null );
    }


 // borrar cliente
  deleteCliente(id: string | any): void {
    const respuesta = confirm('¿Deseas Eliminar a estecliente?');
    if (respuesta) {
      this.clientesService.borrar(id).subscribe(data => {
        this.fetchClientes();
      });
    }
  }

}
