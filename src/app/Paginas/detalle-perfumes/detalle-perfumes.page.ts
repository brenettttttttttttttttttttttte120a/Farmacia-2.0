import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, ModalController } from '@ionic/angular';
import { CarritoPage } from '../carrito/carrito.page';
import { Carrito } from '../modelos/carrito';
import { ProductoId } from '../modelos/productos';
import { ApiProductoService } from '../servicios/api-producto.service';
import { ApiUsuarioService } from '../servicios/api-usuario.service';

@Component({
  selector: 'app-detalle-perfumes',
  templateUrl: './detalle-perfumes.page.html',
  styleUrls: ['./detalle-perfumes.page.scss'],
})
export class DetallePerfumesPage implements OnInit {


  @ViewChild('cartBtn', { read: ElementRef }) cartBnt: ElementRef;
  @ViewChild('cartFabBtn', { read: ElementRef }) cartFabBnt: ElementRef;


  public idActiva: number = 0;
  public productoActivo!: ProductoId;
  public productos: Array<ProductoId> = [];
  carrito: Carrito;
  public usuarioId = '';
  public nombreUsuario = '';



  constructor(

    private rutaActiva: ActivatedRoute,
    private router: Router,
    private apiProducto: ApiProductoService,
    private apiUsuario: ApiUsuarioService,
    private http: HttpClient,
    private modalCtrl: ModalController,
    private animationCtrl:AnimationController


  ) { }

  ngOnInit() {


    this.rutaActiva.paramMap.subscribe(parametros => {
      this.idActiva = +parametros.get('idProducto') // null;
      this.apiProducto.obtenerProductoPorID(this.idActiva)
      .subscribe(datos => {
        if(datos){
          this.productoActivo = datos;
        }else {
          this.router.navigate(['']);
        }
      })
    });

    this.usuarioId = this.apiUsuario.retornarId();
    this.nombreUsuario = this.apiUsuario.retornarUsuario();



  }

  public id = this.apiUsuario.retornarId();
  addToCart(nombre: string, precio: number, imagen:string, cantidad: number, stock: number){
  this.http.get<any>(this.apiProducto.url_carrito).subscribe(data => {
    const producto = data.find((a: any) => {
      return a.idUsuario == this.id &&
        a.idProducto == this.idActiva


      });
      if (producto){
        const carrito: Carrito ={
          "nombre": nombre,
          "precio": precio,
          "imagen": imagen,
          "idUsuario": this.usuarioId,
          "cantidad": producto.cantidad += 1,
          "idProducto": this.idActiva,
          "stock":stock,
          "nombreUsuario":this.nombreUsuario

        }
        alert("Producto agregado al carro");
           this.apiProducto.incrementarProducto(producto.id, producto).subscribe((res)=>{
           console.log(producto.cantidad)
          });
      }
      else {
        const carrito: Carrito ={
                "nombre": nombre,
                "precio": precio,
                "imagen": imagen,
                "idUsuario": this.usuarioId,
                "cantidad": cantidad,
                "idProducto": this.idActiva,
                "stock":stock,
                "nombreUsuario":this.nombreUsuario
              }
            this.apiProducto.addProduct(carrito);
            alert("Producto agregado al carro");
          }


      });
    }

    async openCart(){
      let modal= await this.modalCtrl.create({
        component: CarritoPage,
        cssClass: 'carrito/:idUsuario'
      });
      modal.present();

    }

    addToCartCarrito() {
      const cartAnimation = this.animationCtrl.create('cart-animation')
        .addElement(this.cartBnt.nativeElement)
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.2)' },
          { offset: 0.8, transform: 'scale(0.9)' },
          { offset: 1, transform: 'scale(1)' }
        ]);

      const cartColorAnimation = this.animationCtrl.create('cart-color-animation')
        .addElement(this.cartFabBnt.nativeElement)
        .fromTo('transform', 'rotate(0deg)', 'rotate(45deg)');


      const parent = this.animationCtrl.create('parent')
        .duration(300)
        .easing('ease-out')
        .iterations(2)
        .direction('alternate')
        .addAnimation([cartColorAnimation, cartAnimation]);

      // Playing the parent starts both animations
      parent.play();
    }


    handleRefresh(event) {
      setTimeout(() => {

        this.rutaActiva.paramMap.subscribe(parametros => {
          this.idActiva = +parametros.get('idProducto') // null;
          this.apiProducto.obtenerProductoPorID(this.idActiva)
          .subscribe(datos => {
            if(datos){
              this.productoActivo = datos;
            }else {
              this.router.navigate(['']);
            }
          })
        });

        this.usuarioId = this.apiUsuario.retornarId();

        // Any calls to load data go here

        event.target.complete();

      }, 2000);


    };




}
