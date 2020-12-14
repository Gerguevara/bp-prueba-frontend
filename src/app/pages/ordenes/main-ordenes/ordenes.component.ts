import { OrdenesService } from './../ordenes.service';
import { Orden } from './../../../models/ordenes';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent implements OnInit {

  ordenes: Orden[] = [];
  termino = '';
  error = false;
  p = 1;

  constructor(private ordenesService: OrdenesService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.fetchOrdenes();
    console.log('ordenes', this.ordenes);

  }

  // hace fetch de todos los clientes
  fetchOrdenes(): void {
    this.ordenesService.getOrdenes().subscribe(data => {
      this.ordenes = data;
    },(error) => { this.error = true });
  }

  // fetch de cliente que cumpla con el parametro nombre
  buscar(): void {
    if (this.termino.trim().length === 0) {
      this.fetchOrdenes();
    } else {
      this.ordenesService.filter(this.termino).subscribe(data => {
        this.ordenes = data;
      });
    }
  }

    // abre modal para crear un cliente
    open(): void {
      const modalRef = this.modalService.open(ModalFormComponent, { centered: true });
      modalRef.result.then((data) => {
        this.fetchOrdenes();
      }, (reason) => null );
    }

    // borrar cliente
    deleteOrden(id: string | any): void {
      const respuesta = confirm('¿Deseas Eliminar a estecliente?');
      if (respuesta) {
        this.ordenesService.borrar(id).subscribe(data => {
          this.fetchOrdenes();
        });
      }
    }

}
