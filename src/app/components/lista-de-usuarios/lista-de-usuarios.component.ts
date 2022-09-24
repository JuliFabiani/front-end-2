import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { ClienteModel } from '../crear-usuario/cliente.model';
import { NotificacionClass } from '../notificacion/notificacion.component';

declare var bootstrap: any;

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: 'lista-de-usuarios.component.html',
})
export class ListaDeUsuariosComponent implements OnInit {

  clienteModel = new ClienteModel();
  
  cliente:any;
  
  cargando:boolean = true;
  notiHandler = new NotificacionClass();

  constructor(private clientService:APIService, private router:Router) {  }
  ngOnInit(): void {
    this.cargar();
  }
  cargar() {
    let startFrom = new Date().getTime(); 
    this.cargando = true;     
    this.notiHandler.notificacion("Se envió la consulta para cargar. Esperando respuesta.", "alert-primary");
    this.clientService.consultarClientes().subscribe(resp => { 
      this.cliente = resp.body;
      this.cargando = false;
      console.log(`Tiempo de respuesta: ${new Date().getTime() - startFrom} milisegundos.`);
      this.notiHandler.notificacion("Respuesta OK.", "alert-success");
    });
  }

  modificar(form:NgForm) {
    const notiHandler = new NotificacionClass();
    if(form.invalid) return notiHandler.notificacion("Formulario inválido.", "alert-danger");

    console.log('Request enviado.');
    
    notiHandler.notificacion("Se envió la consulta para modificar. Esperando respuesta.", "alert-primary");
    
    let startFrom = new Date().getTime();

    this.clientService.actualizarCliente(this.clienteModel).subscribe(resp => { 
      // console.log(resp);
      console.log(`Tiempo de respuesta: ${new Date().getTime() - startFrom} milisegundos.`);
      this.router.navigate(['listaDeUsuarios']);

      notiHandler.notificacion("Respuesta OK.", "alert-success");
      this.cargar(); 
    });
  }
  eliminar(id:number) {

    let startFrom = new Date().getTime();
    this.notiHandler.notificacion("Se envió la consulta para eliminar. Esperando respuesta.", "alert-primary");
    this.clientService.eliminarCliente(id).subscribe(resp => { 
      // console.log(resp);
      console.log(`Tiempo de respuesta: ${new Date().getTime() - startFrom} milisegundos.`);
      this.notiHandler.notificacion("Respuesta OK.", "alert-success");
      this.cargar();     
    });
  }
  modalModificar(id:number) {
    let myModal = new bootstrap.Modal(document.getElementById('editarClienteModal'), {});
    myModal.show();

    this.clienteModel.nombre = this.cliente[id].nombre;

    document.getElementById('editarClienteModalNombre')?.setAttribute("value", this.cliente[id].nombre);
    document.getElementById('editarClienteModalApellido')?.setAttribute("value", this.cliente[id].apellido);
    document.getElementById('editarClienteModalDireccion')?.setAttribute("value", this.cliente[id].direccion);
    
    document.getElementById('editarClienteModalNombre')?.setAttribute("disabled", '');
    
  }
}

