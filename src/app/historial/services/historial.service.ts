import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceHistorial } from '../interfaces/interface.historial';
import { InterfaceDetalle } from '../interfaces/interface.detalle';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private urlBase: string = 'http://localhost:8080/detail';

  constructor(private httpClient: HttpClient) { }  

  findDetails(): Observable<InterfaceDetalle> {
    const url: string = `${this.urlBase}`;
    return this.httpClient.get<InterfaceDetalle>(url);
  }  

  genHistorial(id: number): Observable<InterfaceHistorial> {
    const url: string = `${this.urlBase}/${id}`;
    return this.httpClient.get<InterfaceHistorial>(url);
  }  
}
