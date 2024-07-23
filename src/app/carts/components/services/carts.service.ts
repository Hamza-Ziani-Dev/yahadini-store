import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private HttpClient : HttpClient) { }


  // Create New Cart
  createNewCart(model : any){
    return this.HttpClient.post('https://fakestoreapi.com/carts', {});
  }
}
