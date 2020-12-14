import { Producto } from 'src/app/models/productos';
import { ProductosService } from './../productos.service';
import { Component, OnInit } from '@angular/core';
import { ModalFormComponent } from './../modal-form/modal-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {


  productos: Producto[] = [];

  termino = '';
  error = false;
  p = 1;

  constructor(private productoService: ProductosService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.fetchProductos();
  }


  // hace fetch de todos los clientes
  fetchProductos(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

    // fetch de cliente que cumpla con el parametro nombre
    buscar(): void {
      if (this.termino.trim().length === 0) {
        this.fetchProductos();
      } else {
        this.productoService.filter(this.termino).subscribe(data => {
          this.productos = data;
        });
      }
    }

    // abre modal para crear un cliente
    open(): void {
      const modalRef = this.modalService.open(ModalFormComponent, { centered: true });
      modalRef.result.then((data) => {
        this.fetchProductos();
      }, (reason) => null );
    }

  // borrar cliente
  deleteProducto(id: string | any): void {
    const respuesta = confirm('¿Deseas Eliminar a estecliente?');
    if (respuesta) {
      this.productoService.borrar(id).subscribe(data => {
        this.fetchProductos();
      });
    }
  }



}
