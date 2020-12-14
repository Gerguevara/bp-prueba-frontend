export interface Orden {
  idProducto: string;
  idCliente: string;
  idOrden?: string;
  cantidad: string;
  fecha: Date;
}
