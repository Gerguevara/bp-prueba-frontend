import { Producto } from './../../../models/productos';
import { Cliente } from './../../../models/clientes';
import { ProductosService } from './../../productos/productos.service';
import { ClientesService } from './../../clientes/clientes.service';
import { OrdenesService } from './../ordenes.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  error = false;
  form!: FormGroup;
  date = new Date();
  clientes: Cliente[] = [];
  productos: Producto[] = [];


  constructor(private ordenesService: OrdenesService, private fb: FormBuilder, public activeModal: NgbActiveModal,
              private clientesService: ClientesService , private productosService: ProductosService) { }

  ngOnInit(): void {
    this.crearForm();
    this.fetchClientes();
    this.fetchProductos();
  }

  crearForm(): void {
    this.form = this.fb.group({
      idOrden: [ new Date().getMilliseconds(), [Validators.required, Validators.minLength(1)]],
      idProducto: ['', [Validators.required, Validators.minLength(1)]],
      idCliente: ['', [Validators.required, Validators.minLength(1)]],
      cantidad: [0, [Validators.required, Validators.minLength(1), Validators.min(1)]],
      fecha: [this.date , [Validators.required]],
    });
  }

  guardar(): void {
    if (!this.form.invalid) {
      console.log('valido', this.form.value);
      this.ordenesService.crear(this.form.value).subscribe((resp: any) => {
        console.log('resp', resp);
        this.activeModal.close('guardado');
    });
    } else {
      this.setError();
    }
  }

  setError(): void {
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5000);
  }


  fetchClientes() {
    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  fetchProductos() {
    this.productosService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  // tslint:disable-next-line: typedef
  get clienteNoValido() {
    return this.form.get('idCliente')?.invalid && this.form.get('idCliente')?.touched;
  }

  // tslint:disable-next-line: typedef
  get productoNoValido() {
    return this.form.get('idProducto')?.invalid && this.form.get('idProducto')?.touched;
  }

   // tslint:disable-next-line: typedef
   get cantidadInvalido() {
    return this.form.get('cantidad')?.invalid && this.form.get('cantidad')?.touched;
  }


}
