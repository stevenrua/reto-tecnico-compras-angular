import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompraInterface } from '../interface/compra.interface';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private urlBase: string = 'http://localhost:8080/buy';

  constructor(private httpClient: HttpClient) { }  

  newCompra(compra: CompraInterface): Observable<CompraInterface> {
    const url: string = `${this.urlBase}`;
    return this.httpClient.post<CompraInterface>(url, compra);
  }  
}
