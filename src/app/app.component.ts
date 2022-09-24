import { Component } from '@angular/core';
import { NotificacionClass } from './components/notificacion/notificacion.component';

export var debug = false;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'front-end';
  
  
  DebugA() {
    let controlCheckbox = <HTMLInputElement>document.getElementById("checkboxDebug");
    debug = controlCheckbox.checked;
  }
}
