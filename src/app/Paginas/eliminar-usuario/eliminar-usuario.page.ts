import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioConIdo } from '../modelos/usuario';
import { ApiUsuarioService } from '../servicios/api-usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.page.html',
  styleUrls: ['./eliminar-usuario.page.scss'],
})
export class EliminarUsuarioPage implements OnInit {
  public idActiva: number = 0;
  public usuarioactivo!: UsuarioConIdo;
  constructor(

    private rutaActiva: ActivatedRoute,
    private router: Router,
    private apiUsuario: ApiUsuarioService,
    private alerta: AlertController
  ) { }

  ngOnInit() {

    this.rutaActiva.paramMap.subscribe(parametros => {
      this.idActiva = +parametros.get('idUsuario') // null;
      this.apiUsuario.obtenerUsuarioPorID(this.idActiva)
      .subscribe(datos => {
        if(datos){
          this.usuarioactivo = datos;
        }else {
          this.router.navigate(['']);
        }
      })
    });




  }
  public async borrar(){
    const mensaje = await this.alerta.create({
      header: '¿Seguro quieres borrar?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Si, borralo',
          role: 'confirm',
          handler: () => {
            this.apiUsuario.eliminarUsuarioPorID(this.idActiva)
            .subscribe(() => {
              this.router.navigate(['/roles']);
            })
          }
        }
      ]
    });
    await mensaje.present();
  }

}
