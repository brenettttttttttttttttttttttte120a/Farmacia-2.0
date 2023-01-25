import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../modelos/usuario';
import { ApiUsuarioService } from '../servicios/api-usuario.service';
import { createAnimation } from '@ionic/core';
import { AnimationController, ModalController } from '@ionic/angular';
import { CarritoPage } from '../carrito/carrito.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})




export class LoginPage implements OnInit {
  @ViewChild('iconoAnim', { read: ElementRef }) iconoAnim: ElementRef;
  @ViewChild('loadingIcon', { read: ElementRef }) loadingIcon: ElementRef;


  formularioLogin: FormGroup;
  usuarios: Usuario[];
  constructor(
    public fb: FormBuilder,
    private apiUsuario: ApiUsuarioService,
    private router: Router,
    private http: HttpClient,
    private animationCtrl :AnimationController,
    private modalCtrl:ModalController
  ) {

    this.formularioLogin = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      contraseña: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    })


  }
  public campo(control: string) {
    return this.formularioLogin.get(control);
  }
  public fueTocado(control: string) {
    return this.formularioLogin.get(control).touched;
  }


  ngOnInit() {
    this.apiUsuario.getUsuario().subscribe(data => (this.usuarios = data));
  }

  async ingresar() {
    var f = this.formularioLogin.value;
    var tipo = "Quimico Farmaceutico"

    this.http.get<any>(this.apiUsuario.url_usuario).subscribe(res => {
      const user = res.find((a: any) => {
        return a.nombre === f.nombre && a.contraseña === f.contraseña

      });
      this.formularioLogin.reset();
      if (user) {

        if (user.tipo === tipo) {
          alert("Quimico Farmaceutico logueado");
          this.apiUsuario.idUsuario(user.id);
          this.apiUsuario.tipoUsuario(user.tipo);
          this.router.navigate(['/producto-qf']);
        } else if (user.tipo === "cliente") {
          this.apiUsuario.idUsuario(user.id);
          this.apiUsuario.tipoUsuario(user.tipo);
          alert("Cliente logueado");
          this.router.navigate(['/']);

        } else {
          this.apiUsuario.idUsuario(user.id);
          this.apiUsuario.tipoUsuario(user.tipo);
          alert("admin logueado");
          this.router.navigate(['/roles']);

        }
      } else {
        alert("Datos Incorrectos");
      };




    }
    )

  }
  animacion(){
    const animacionProbando = this.animationCtrl.create('animacion-Probando')
  .addElement(this.iconoAnim.nativeElement)
  .duration(2000)
  .iterations(5)
  .beforeStyles({
    opacity: 1.0

  })
  .afterStyles({
    background: 'rgba(0, 255, 0, 0.5)'
  })
  .afterClearStyles(['opacity'])
  .keyframes([
    { offset: 0, transform: 'scale(1.0)' },
    { offset: 0.5, transform: 'scale(0.5)' },
    { offset: 1, transform: 'scale(1.0)' },

  ])
  animacionProbando.play();
  }

  startLoad() {
    const loadingAnimation = this.animationCtrl.create('loading-animation')
      .addElement(this.loadingIcon.nativeElement)
      .duration(1500)
      .iterations(3)
      .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)');

    loadingAnimation.play();
  }


  async openCart(){
    let modal= await this.modalCtrl.create({
      component: CarritoPage,
      cssClass: 'carrito/:idUsuario'
    });
    modal.present();

  }

}
