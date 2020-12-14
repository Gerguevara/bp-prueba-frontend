import { Cliente } from './../../../models/clientes';
import { ClientesService } from './../clientes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.scss']
})
export class DetalleClienteComponent implements OnInit, OnDestroy {

  cliente: Cliente = { nombre: '', apellidos: '', id: '' };
  form!: FormGroup;
  serve!: Subscription;
  error = false;
  id = '';
  constructor(private clienteService: ClientesService, private router: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
     this.id = params.id;
     this.getcliente(params.id);
    });
    this.crearForm();
  }

  getcliente(id: string): void {
    this.clienteService.getCliente(id).subscribe((data: Cliente) => {
      this.cliente = data;
    });
  }

  crearForm(): void {
    this.form = this.fb.group({
      nombre: [this.cliente.nombre, [Validators.required, Validators.minLength(2)]],
      apellidos: [this.cliente.apellidos, [Validators.required, Validators.minLength(2)]]
    });
  }


  guardar(): void {
    if (!this.form.invalid) {
      this.clienteService.editar(this.id, this.form.value).subscribe((resp: any) => {
        this.getcliente(resp.id);
      });
      alert('Actualizado');
    } else {
      this.setError();
    }
  }

  // getters validators
  // tslint:disable-next-line: typedef
  get nombreNoValido() {
    return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched;
  }

  // tslint:disable-next-line: typedef
  get apellidoNoValido() {
    return this.form.get('apellidos')?.invalid && this.form.get('apellidos')?.touched;
  }

  setError(): void {
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5000);
  }

  ngOnDestroy(): void {
    this.serve.unsubscribe();
    console.log('unsubscribe');
  }


}
