import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListaDeUsuariosComponent } from './components/lista-de-usuarios/lista-de-usuarios.component';
import { NotificacionClass } from './components/notificacion/notificacion.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    ListaDeUsuariosComponent,
    NotificacionClass
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
