import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ApiProductoService } from '../servicios/api-producto.service';
import { ApiUsuarioService } from '../servicios/api-usuario.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  cart: any = [];
  public formulario: FormGroup;
  cartItemCount: BehaviorSubject<number>;
  public usuarioId = '';


  constructor(
    private cartService: ApiProductoService
    , private modalCtrl: ModalController
    , private router: Router
    , private fb: FormBuilder
    , private apiUsuario: ApiUsuarioService


  ) {

    this.formulario = this.fb.group({
      cantidad: [1],
    })





  }
  close() {
    this.modalCtrl.dismiss();
  }

  ngOnInit(  )
  {
    this.usuarioId = this.apiUsuario.retornarId()
    this.cartService.getProductoCarrito(this.usuarioId).subscribe(res => {
      this.cart = res;

    });

  }

  incrementarProd(cart) {
    this.cartService.incrementarProdv3(cart.id, {
      ...this.formulario.value,
      cantidad: cart.cantidad += 1
    }).subscribe((res) => {
      console.log(res);
    });
  }

  disminuirProd(cart) {
    if (cart.cantidad > 1) {
      this.cartService.incrementarProdv3(cart.id, {
        ...this.formulario.value,
        cantidad: cart.cantidad -= 1
      })
        .subscribe((res) => {
          console.log(res);
        });

    } else {
      this.cartService.removeProductou(cart);
      alert('Producto Eliminado: Recargar La pagina');
    }
  }

  removeCartItem(cart) {
    cart.cantidad = 1;
    this.cartService.removeProductou(cart);
    alert('Producto Eliminado: Recargar La pagina');
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.precio * j.cantidad, 0);
  }

  checkout() {
    alert("Producto comprado")
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.cartService.getProducto(this.usuarioId).subscribe(res => {
        this.cart = res;
      })
      this.cartItemCount = this.cartService.getCarItemCount();



      event.target.complete();
    }, 2000);
  };

  reLoad() {
    this.router.navigate([this.router.url])
  }


}
