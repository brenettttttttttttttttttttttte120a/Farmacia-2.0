import { Component, OnInit } from '@angular/core';
import { ApiProductoService } from '../servicios/api-producto.service';
import { ApiUsuarioService } from '../servicios/api-usuario.service';

@Component({
  selector: 'app-medio-pago',
  templateUrl: './medio-pago.page.html',
  styleUrls: ['./medio-pago.page.scss'],
})
export class MedioPagoPage implements OnInit {

  public nombreUsuario = '';
  public totalCarrito='';

  constructor(
    private apiUsuario :ApiUsuarioService,
    private apiProducto:ApiProductoService
  ) { }

  ngOnInit() {

  this.nombreUsuario=this.apiUsuario.retornarUsuario();
  this.totalCarrito=this.apiProducto.retornarTotal();
  }

  checkout() {
    alert("Producto comprado")
  }

}
