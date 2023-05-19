import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlBase: string = 'http://localhost:8080/product';

  constructor(private httpClient: HttpClient) { }

  getListProducts(): Observable<Product[]> {
    const url: string = `${this.urlBase}`;
    return this.httpClient.get<Product[]>(url);
  }

  getProductById(id: number): Observable<Product> {
    const url: string = `${this.urlBase}/${id}`;
    return this.httpClient.get<Product>(url);
  }
  updateProduct(id: number, product: Product): Observable<Product> {
    const url: string = `${this.urlBase}/${id}`;
    return this.httpClient.put<Product>(url, product);
  }

  newProduct(product: Product): Observable<Product> {
    const url: string = `${this.urlBase}`;
    return this.httpClient.post<Product>(url, product);
  }

  deleteProduct(id: number): Observable<Product> {
    const url: string = `${this.urlBase}/${id}`;
    return this.httpClient.delete<Product>(url);
  }
}
