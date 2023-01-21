import { Component, OnInit, ViewChild } from '@angular/core';

import { IonInfiniteScroll } from '@ionic/angular';
import { ApiProductoService } from '../servicios/api-producto.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {


  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;
  public data: any = []
  public results = [...this.data];

  public categoria= '';
  cart: any = [];
  public resultados = [...this.cart];


  constructor(
    public servicio: ApiProductoService,


  ) { }

  ngOnInit() {
    this.servicio.obtenerPrimerosProductos();
    this.servicio.listaProducto$.subscribe(resp => {
      this.data = resp;
      this.results = this.data;
      console.log("estos datitos tengo:", this.data);
      if (this.scroll) {
        this.scroll.complete();
      }


    });
    this.categoria= this.servicio.retornarcategoria();
    this.servicio.getProducto(this.categoria).subscribe(res => {
      this.cart = res;
      this.resultados = this.cart;
      if (this.scroll) {
        this.scroll.complete();
      }


    });



  }
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

   handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.resultados = this.cart;
    if (query && query.trim() != ' ') {
      this.resultados = this.resultados.filter((cart: any) => {
        return (cart.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1)||(cart.categoria.toLowerCase().indexOf(query.toLowerCase()) > -1)||(cart.marca.toLowerCase().indexOf(query.toLowerCase()) > -1);
      });
    }
  }




}
