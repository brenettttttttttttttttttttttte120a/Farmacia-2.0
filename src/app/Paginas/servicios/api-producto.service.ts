
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Carrito } from '../modelos/carrito';
import { Producto, ProductoId } from '../modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ApiProductoService {
  private cart: any = [];

  public  url_producto ='http://localhost:3000/producto';
  public url_carrito = 'http://localhost:3000/carrito';
  private comListaProd = new BehaviorSubject <Array<ProductoId>>([]);
  public listaProducto$ = this.comListaProd.asObservable();
  public paginaActualProducto = 1;
  private cartItemCount = new BehaviorSubject(0);

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

  public getProductoCarrito(id: string) {
    return this.http.get<any>(`${this.url_carrito}?idUsuario=${id}`)

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

  public obtenerProductoPorID(id: number): Observable<ProductoId | null> {
    return this.http.get<ProductoId | null>(`${this.url_producto}/${id}`);
  }


  incrementarProducto(idProducto: number, prod: Carrito) {
    return this.http.patch(`${this.url_carrito}/${idProducto}`, prod);
  }

  addProduct(carro: Carrito) {

    this.http.post(`${this.url_carrito}`, carro).subscribe(res => {
      console.log(carro);
      this.cartItemCount.next(this.cartItemCount.value + 1);
      console.log(this.cartItemCount);
    })
  }

  incrementarProdv3(id: number, prod: Producto) {
    return this.http.patch(`${this.url_carrito}/${id}`, prod);
  }

  removeProductou(comCarrito) {
    return this.http.delete<any>(`${this.url_carrito}/${comCarrito.id}`).subscribe(res => {
      console.log(this.cart)
    })
  }

  getCarItemCount() {
    return this.cartItemCount;
  }

  stockProducto(id: number, prod: Producto) {
    return this.http.patch(`${this.url_producto}/${id}`, prod);
  }


  public totalCarrito(total){
    localStorage.setItem('total carrito',total);

  }
  public retornarTotal(){
    return localStorage.getItem('total carrito');
  }


}

