import { Component } from '@angular/core';
import { ProductsModule } from '../../products.module';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [
    ProductsModule,
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  products : any[] = [];


  constructor(private productsService : ProductsService) {}



  ngOnInit(): void {
    this.getAllProducts();
  }


  // get All Products 
  getAllProducts(){
    this.productsService.getAllProducts().subscribe((res:any)=>{
      this.products = res
      console.log(this.products);
    });
    
  }

}
