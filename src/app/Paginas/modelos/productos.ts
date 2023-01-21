export interface Producto {
  categoria: string;
  marca : string;
  nombre : string;
  imagen: string;
  precio: number;
  detalle:string;
  receta: string;
  cantidad:number;






}
export interface ProductoId extends Producto{
id: number;
}

export interface ProductoParcial extends Partial<Producto>{

}



