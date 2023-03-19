import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NombreServicioService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get('https://mi-servidor.com/datos');
  }

}//Configurar el servicio: En el archivo del servicio, debes importar el módulo HttpClient y configurar el servicio HTTP de la siguiente manera:

