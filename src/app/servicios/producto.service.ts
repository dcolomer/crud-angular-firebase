import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listaProd: AngularFireList<any>;
  productoSeleccionado: Producto = new Producto();

  constructor(private firebase: AngularFireDatabase) { }

  getProductos() {
    return this.listaProd = this.firebase.list('productos');
  }

  nuevoProducto(producto: Producto) {
    this.listaProd.push({
      descripcion: producto.descripcion,
      precio: producto.precio
    });
  }

  actualizarProducto(producto: Producto) {
    this.listaProd.update(producto.$key, {
      descripcion: producto.descripcion,
      precio: producto.precio
    });
  }

  eliminarProducto($key: string) {
    this.listaProd.remove($key);
  }
}
