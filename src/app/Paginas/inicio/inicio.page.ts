import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { CarritoPage } from '../carrito/carrito.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
  private modalCtrl: ModalController,
  private navCtrl:NavController,
  private alertControler:AlertController

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

async salir(){
    const alert= await this.alertControler.create({
      header:'Cerrar Sesión',
      message:'¿Realmente quieres cerrar sesión?',
      buttons: [
        {
          text:'No',
          handler:() =>{

          }
        },
        {
          text: 'Si',
          handler:()=>{
            this.navCtrl.navigateRoot('/login');
            localStorage.clear();
          }
        }
      ]

    });
    await alert.present();
  }


}


