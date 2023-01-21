import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUsuarioService } from '../servicios/api-usuario.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.page.html',
  styleUrls: ['./modificar-usuario.page.scss'],
})
export class ModificarUsuarioPage implements OnInit {
  public formulario: FormGroup;
  public idActiva =  0;

  constructor(

    private router: Router,
    private rutaActiva: ActivatedRoute,
    private apiUsuario: ApiUsuarioService,
    private fb: FormBuilder

  ) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      tipo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    });
  }
  public campo(control: string) {
    return this.formulario.get(control);
  }
  public fueTocado(control: string){
    return this.formulario.get(control).touched;
  }
  public estaSucio(control: string){
    return this.formulario.get(control).dirty;
  }

  ngOnInit() {


    this.rutaActiva.params.subscribe(parametros => {
      this.idActiva = parametros.idUsuario;
      this.apiUsuario.obtenerUsuarioPorID(this.idActiva)
      .subscribe(usuario=> {
        if(usuario){

          this.formulario.setValue({
            ...usuario
          });
          this.formulario.updateValueAndValidity();
        }
        else{
          this.router.navigate(['']);
        }
      })
    });
  }
  public modificar(){
    this.apiUsuario.modificarPorID(this.idActiva,{
      ...this.formulario.value,
    }).subscribe(datos => {
      if(datos){
        alert('Modificado')
        this.router.navigate(['/roles']);
      }
    })
  }

}
