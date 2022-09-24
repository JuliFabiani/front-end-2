import { Component, OnInit } from '@angular/core';
import { debug } from 'src/app/app.component';

var activeNotis = 0;
var notificaciones = new Array<NotificacionObj>;


@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
 
export class NotificacionClass implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  
  public notificacion(mensaje:string, tipo:string) {
    notificaciones.push(new NotificacionObj(mensaje, tipo));
  }

}

class NotificacionObj {
  timeIn = 0;
  id;

  constructor(mensaje:string, tipo:string) {
    this.timeIn = Date.now();
    this.id = activeNotis;
    this.createNoti(mensaje, tipo);
    
    setTimeout(() => { this.closeNoti(); }, 3000);

    activeNotis++;
  }

  createNoti(mensaje:string, tipo:string) {

    if(debug){
      const div = document.createElement("div");
      div.id = `notiId${this.id}`;
      div.className = `alert ${tipo} alert-dismissible animate__animated animate__fadeInRight`;
      div.setAttribute("role", "alert");
      div.style.width = "auto";
      div.style.margin = "auto";
      div.style.right = "8px";
      div.style.top = `${64*this.id+24}px`;
      div.style.position = "fixed";
      div.style.zIndex = "999";
      div.innerHTML = `<button class="btn-close" name="notiId${this.id}.button " type="button" aria-label="Close"></button>
      <span>${mensaje}</span>`;
      document.getElementById("divNotis")?.appendChild(div);
    }

  }

  closeNoti()
  {
    document.getElementById(`notiId${this.id}`)?.classList.add('animate__fadeOutRight');
    if(this.id == activeNotis-1) activeNotis = 0;
    setTimeout(() => { document.getElementById(`notiId${this.id}`)?.remove(); }, 1000);
    
  }
}