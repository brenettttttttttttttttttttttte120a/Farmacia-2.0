export interface Carrito {
  imagen: string;
  nombre: string;
  precio: number;
  idUsuario: string;
  idProducto: number;
  cantidad: number;
  stock:number;
  nombreUsuario:string;
}

export interface carritoConID extends Carrito{
  id: number;
}
