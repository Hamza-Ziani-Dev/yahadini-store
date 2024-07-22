import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared/shared.module';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

// Parent To Child
  @Input() data: any= {}

  // Child To Parent
  @Output() item = new EventEmitter<any>(); 
  
  showButton = false

  amount :number =  0;

  constructor(){}


  OnInit(){

  }

  addProduct(){
    this.item.emit({item: this.data, quantity: this.amount})
  }




}
