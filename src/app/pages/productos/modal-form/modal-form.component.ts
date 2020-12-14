import { ProductosService } from './../productos.service';
import { Component,  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {

  error = false;
  form!: FormGroup;
  serverError = false;
  constructor(private productService: ProductosService, private fb: FormBuilder, public activeModal: NgbActiveModal) {
    this.crearForm();
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
      this.productService.crear(this.form.value).subscribe((resp: any) => {
        this.activeModal.close('guardado');
    }, (error) => { this.serverError = true });
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
  get descripcionValida() {
    return this.form.get('descripcion')?.invalid && this.form.get('descripcion')?.touched;
  }

   // tslint:disable-next-line: typedef
   get precioNoValido() {
    return this.form.get('precio')?.invalid && this.form.get('precio')?.touched;
  }

  setError(): void {
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5000);
  }



}
