import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared/shared.module';
import { MaterialModule } from '../../../material/material.module';
import { CartsService } from '../services/carts.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    SharedModule,
    MaterialModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  productsInCart : any[] = [];
  total : number = 0;
  success : boolean = false;

  constructor(private cartService : CartsService) {}


  ngOnInit(): void {
    this.getAllProductsInCart();
    this.getTotalInCart();
    
  }

  // get cart products
  getAllProductsInCart(){
    if ('cart' in localStorage) {
      this.productsInCart = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  // getTotal
  getTotalInCart(){
    this.total = 0;
    for (let i = 0; i < this.productsInCart.length; i++) {
      this.total += this.productsInCart[i].item.price * this.productsInCart[i].quantity;
    }
  }

  // increase
  increaseQuantity(item : any){
    this.productsInCart[item].quantity++;
    this.getTotalInCart();
    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
  }

  // decrease
  decreaseQuantity(item : any){
    this.productsInCart[item].quantity--;
    this.getTotalInCart();
    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
  }

  // detect change
  detectChange(){
    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
  }

  // remove item
  removeItem(item : any){
    this.productsInCart.splice(item, 1);
    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
    this.getTotalInCart();
  }

  // clear cart
  clearCart(){
    this.productsInCart = [];
    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
    this.getTotalInCart();
  }


  addCart(){
    let products = this.productsInCart.map((item) => {
      return {
        productId : item.item.id,
        quantity : item.quantity
      }
    });
    let Model = {
      userId : 5,
      date : new Date(),
      products : products,
    }
    this.cartService.createNewCart(Model).subscribe(
      (res) => {
        this.success = true;
        this.productsInCart = [];
        localStorage.setItem('cart', JSON.stringify(this.productsInCart));
        this.getTotalInCart();  
      });
     
  }
}
