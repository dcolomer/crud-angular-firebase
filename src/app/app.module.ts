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
      apiKey: '******',
      authDomain: '******',
      databaseURL: '******',
      projectId: '******',
      storageBucket: '******',
      messagingSenderId: '******',
      appId: '******'
    }),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'})
  ],
  providers: [ProductoService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
