import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ApiProductoService } from '../servicios/api-producto.service';

@Component({
  selector: 'app-cremas',
  templateUrl: './cremas.page.html',
  styleUrls: ['./cremas.page.scss'],
})
export class CremasPage implements OnInit {


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

    this.categoria= this.servicio.retornarcategoriacrema();
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
