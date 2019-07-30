import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  mostrarLista: boolean;

  receiveMessage($event) {
    this.mostrarLista = $event;
  }

  constructor() { }

  ngOnInit() {
  }

}
