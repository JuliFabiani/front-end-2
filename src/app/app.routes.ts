import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListaDeUsuariosComponent } from './components/lista-de-usuarios/lista-de-usuarios.component';

const APP_ROUTES: Routes = [
    { path: 'crearUsuario', component:CrearUsuarioComponent },
    { path: 'listaDeUsuarios', component:ListaDeUsuariosComponent },
    { path: '**', pathMatch: 'full', component:CrearUsuarioComponent}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);