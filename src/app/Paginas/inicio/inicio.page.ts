import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarritoPage } from '../carrito/carrito.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
  private modalCtrl: ModalController

  ) { }

  async openCart(){
    let modal= await this.modalCtrl.create({
      component: CarritoPage,
      cssClass: 'carrito'
    });
    modal.present();

}

  ngOnInit() {
  }




}


