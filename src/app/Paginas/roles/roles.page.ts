import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ApiUsuarioService } from '../servicios/api-usuario.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage implements OnInit {


  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;
  public data: any = []
  public results = [...this.data];

  public categoria= '';
  constructor(
    public servicio: ApiUsuarioService,


  ) {



  }

  ngOnInit() {
    this.servicio.obtenerPrimerosUsuarios();
    this.servicio.listaUsuario$.subscribe(resp => {
      this.data = resp;
      this.results = this.data;
      console.log("estos datitos tengo:", this.data);
      if (this.scroll) {
        this.scroll.complete();
      }


    });






  }

  ionViewWilEnter(){



  }

  handleRefresh(event) {
    setTimeout(() => {
      this.servicio.obtenerPrimerosUsuarios();
    this.servicio.listaUsuario$.subscribe(resp => {
      this.data = resp;
      this.results = this.data;
      console.log("estos datitos tengo:", this.data);
      if (this.scroll) {
        this.scroll.complete();
      }


    });

      event.target.complete();
    }, 2000);
  };

   handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data;
    if (query && query.trim() != ' ') {
      this.results = this.results.filter((data: any) => {
        return (data.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1)||(data.tipo.toLowerCase().indexOf(query.toLowerCase()) > -1);
      });
    }
  }






}
