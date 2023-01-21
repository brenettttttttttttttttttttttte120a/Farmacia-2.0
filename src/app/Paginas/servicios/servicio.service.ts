import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public nombreUsuario(usuario){
    localStorage.setItem('usuario', usuario);
  }

  public retornarUsuario(){
    return localStorage.getItem('usuario');
  }

  constructor() { }
}
