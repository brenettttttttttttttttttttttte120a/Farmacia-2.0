import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUsuarioService } from '../servicios/api-usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public formulario2: FormGroup;
  constructor(
    private formC: FormBuilder,
    private apiUsuario: ApiUsuarioService,
    private router: Router
  ) {
    this.formulario2 = this.formC.group({

      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],

      contraseña: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      tipo: ['cliente',]


    })
  }
  ngOnInit() {
  }
  public campo(control: string) {
    return this.formulario2.get(control);
  }
  public fueTocado(control: string){
    return this.formulario2.get(control).touched;
  }
  public estaSucio(control: string){
    return this.formulario2.get(control).dirty;
  }


  public guardarCliente(): void {
    if(this.formulario2.invalid){
      this.formulario2.markAllAsTouched();
      return;
    }
    // Guardar
    this.apiUsuario.agregarUsuario({
      ...this.formulario2.value
    })
    .subscribe(resultado => {
      if(resultado){
        this.formulario2.reset();
        this.formulario2.updateValueAndValidity();
        alert('Guardada');
        this.router.navigate(['']);
      }
    })
  }





   }
