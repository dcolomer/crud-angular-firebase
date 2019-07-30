import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';

import { ProductoService } from 'src/app/servicios/producto.service';
import { ToastrService } from 'ngx-toastr';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  listaProductos: Producto[];
  @Input() mostrarLista: boolean;
  loading = true;

  constructor(private productoService: ProductoService,  private toastr: ToastrService) { }

  ngOnInit() {
    return this.productoService.getProductos()
      .snapshotChanges().subscribe(item => {
        this.listaProductos = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.listaProductos.push(x as Producto);
          this.loading = false;
        });
      });
  }

  onEdit(producto: Producto) {
    this.productoService.productoSeleccionado = Object.assign({}, producto);
  }

  onDelete($key: string) {
    Swal.fire({
      title: '¿Estás seguro de borrar el producto?',
      text: `¡Esta acción no se puede deshacer!`,
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      background: 'indianred',
      width: '24rem',
      allowOutsideClick: false,
      confirmButtonColor: 'red',
      reverseButtons: true,
      focusConfirm: false
    }).then( resp => {
      if ( resp.value ) {
        this.productoService.eliminarProducto($key);
        this.toastr.warning('Operación correcta', 'Producto eliminado');
      }
    });
  }

}
