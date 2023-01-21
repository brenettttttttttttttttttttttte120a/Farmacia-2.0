
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto, ProductoId } from '../modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ApiProductoService {

  public  url_producto ='http://localhost:3000/producto';
  private comListaProd = new BehaviorSubject <Array<ProductoId>>([]);
  public listaProducto$ = this.comListaProd.asObservable();
  public paginaActualProducto = 1;
  constructor(private http:HttpClient) {

  }

  public obtenerPrimerosProductos(){
    this.http.get<ProductoId[]>(`${this.url_producto}?_page=1`).pipe()
    .subscribe(resp =>{
      this.paginaActualProducto = this.paginaActualProducto+1;
      this.comListaProd.next(resp);
    })
  }
  public getProducto(categoriaProducto: string) {
    return this.http.get<any>(`${this.url_producto}?categoria=${categoriaProducto}`)
  }

  public categoria(categoria){
    localStorage.setItem('nombrecategoria',categoria);

  }
  public retornarcategoria(){
    return localStorage.getItem('nombrecategoria');
  }

  public categoriacrema(categoriacrema){
    localStorage.setItem('crema cat',categoriacrema);

  }
  public retornarcategoriacrema(){
    return localStorage.getItem('crema cat');
  }

  public categoriaperfume(categoriaperfume){
    localStorage.setItem('perfume categoria',categoriaperfume);

  }
  public retornarcategoriaperfume(){
    return localStorage.getItem('perfume categoria');
  }

  public agregarProducto(producto: Producto) {
    return this.http.post(this.url_producto, producto, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
  }

}

