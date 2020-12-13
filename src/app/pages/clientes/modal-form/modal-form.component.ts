import { ClientesService } from './../clientes.service';
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

  constructor(private cliente: ClientesService, private fb: FormBuilder , public activeModal: NgbActiveModal) {
    this.crearForm();
  }

  ngOnInit(): void {
  }


  crearForm(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]]
    });

  }


  guardar(): void {
    if (!this.form.invalid) {
      this.cliente.crear(this.form.value).subscribe((resp: any) => {
        this.activeModal.close('guardado');
    });
    }

  }

  // getters validators
  get nombreNoValido() {
    return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched;
  }

  get apellidoNoValido() {
    return this.form.get('apellido')?.invalid && this.form.get('apellido')?.touched;
  }


}
