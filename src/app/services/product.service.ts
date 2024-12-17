import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../data/product.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //products: Product[] = [];

  url: string = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  findAll(): Product[]{
    return products;
  }

  findAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
}
