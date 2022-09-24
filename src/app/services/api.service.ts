import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteModel } from '../components/crear-usuario/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  constructor(private http:HttpClient) { 

  }
  private webApiUrl = "https://localhost:7146/api/clientes/";
 
  consultarClientes() {
    return this.http.get(this.webApiUrl, {observe: 'response'});
  }; 
  consultarCliente(id:number) {
    return this.http.get(`${this.webApiUrl}/${id}`, {observe: 'response'});
  }  
  crearCliente(cliente:ClienteModel) {
    return this.http.post(this.webApiUrl, cliente, {observe: 'response'});
  }
  actualizarCliente(cliente:ClienteModel) {
    return this.http.put(this.webApiUrl, cliente, {observe: 'response'});
  }
  eliminarCliente(id:number) {
    return this.http.delete(`${this.webApiUrl}${id}`, {observe: 'response'});
  }



}

