import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared/shared.module';
import { MaterialModule } from '../../../material/material.module';

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

}
