import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Toastr
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ProductoComponent } from './componentes/productos/producto/producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ListaProductosComponent } from './componentes/productos/lista-productos/lista-productos.component';

import { ProductoService } from './servicios/producto.service';
import {LoadingComponent} from './componentes/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductosComponent,
    ListaProductosComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDxF2ddLeViR9NJk6J3L2EKstjKbwFuOfA',
      authDomain: 'crud-firebase-1534d.firebaseapp.com',
      databaseURL: 'https://crud-firebase-1534d.firebaseio.com',
      projectId: 'crud-firebase-1534d',
      storageBucket: 'crud-firebase-1534d.appspot.com',
      messagingSenderId: '387377244618'
    }),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'})
  ],
  providers: [ProductoService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
