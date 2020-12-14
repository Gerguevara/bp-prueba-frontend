import { ProductosService } from './../productos.service';
import { Producto } from 'src/app/models/productos';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit, OnDestroy {

  producto: Producto = { nombre: '', descripcion: '', id: '', precio: '0' };
  form!: FormGroup;
  error = false;
  serve!: Subscription;
  id = '';


  constructor(private productosService: ProductosService, private router: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.serve = this.router.params.subscribe(params => {
      this.id = params.id;
      this.getProducto(params.id);
    });
    this.crearForm();
  }


  getProducto(id: string): void {
    this.productosService.getProducto(id).subscribe((data: Producto) => {
      this.producto = data;
    });
  }

  crearForm(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: ['', [Validators.required, Validators.minLength(8)]],
      precio: [0.00, [Validators.required]],
    });
  }

  guardar(): void {
    if (!this.form.invalid) {
      this.productosService.editar(this.id, this.form.value).subscribe((resp: any) => {
        this.getProducto(resp.id);
      });
      alert('Actualizado');
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

  // getters validators
  // tslint:disable-next-line: typedef
  get nombreNoValido() {
    return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched;
  }

  // tslint:disable-next-line: typedef
  get descripcionValida() {
    return this.form.get('descripcion')?.invalid && this.form.get('descripcion')?.touched;
  }

  // tslint:disable-next-line: typedef
  get precioNoValido() {
    return this.form.get('precio')?.invalid && this.form.get('precio')?.touched;
  }

  ngOnDestroy(): void {
    this.serve.unsubscribe();
    console.log('unsubscribe');
  }


}
