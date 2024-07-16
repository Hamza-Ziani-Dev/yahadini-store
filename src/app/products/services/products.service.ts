import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private HttpClient : HttpClient) { }


  getAllProducts(){
    return this.HttpClient.get('https://fakestoreapi.com/products');}
}
