import { Component, OnInit } from '@angular/core';
import { ClienteModel } from './cliente.model';
import { NgForm } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { NotificacionClass } from '../notificacion/notificacion.component';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: 'crear-usuario.component.html',
  styleUrls: [ 'crear-usuario.component.css',
  ]
})
export class CrearUsuarioComponent implements OnInit {

  cliente = new ClienteModel();


  constructor(private clienteService:APIService, private router:Router) {  }
  ngOnInit(): void {  }

  guardar(form:NgForm) {
    const notiHandler = new NotificacionClass();
    if(form.invalid) return notiHandler.notificacion("Formulario inválido.", "alert-danger");

    console.log('Request enviado.');
    
    notiHandler.notificacion("Se envió la consulta. Esperando respuesta.", "alert-primary");
    
    let startFrom = new Date().getTime();
    console.log(this.cliente);
    this.clienteService.crearCliente(this.cliente).subscribe(resp => { 
      // console.log(resp);
      console.log(`Tiempo de respuesta: ${new Date().getTime() - startFrom} milisegundos.`);
      this.router.navigate(['listaDeUsuarios']);


      notiHandler.notificacion("Respuesta OK. Redirigiendo a la tabla.", "alert-success");

    });
  }
}
