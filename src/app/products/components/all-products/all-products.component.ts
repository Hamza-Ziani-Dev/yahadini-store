import { Component } from '@angular/core';
import { ProductsModule } from '../../products.module';
import { ProductsService } from '../../services/products.service';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [
    ProductsModule,
    MaterialModule
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  selected = 'option2';
  products : any[] = [];
  categories : any[] = [];

  constructor(private productsService : ProductsService) {}



  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }


  // get All Products 
  getAllProducts(){
    this.productsService.getAllProducts().subscribe((res:any)=>{
      this.products = res
      // console.log(this.products);
    });
    
  }

    // get All Categories 
    getAllCategories(){
      this.productsService.getAllCategories().subscribe((res:any)=>{
        this.categories = res
        console.log(this.categories);
      });
      
    }


    FilterCategories(event : any){
      const filterValue =  event.target.value;
      if(filterValue === 'All'){
        this.getAllProducts();
      }else{
        this.getCategoriesByName(filterValue);
      }
    }

    getCategoriesByName(keysName : string){
      this.productsService.getCategoriesByName(keysName).subscribe((res:any)=>{
        this.products = res
        console.log(this.products);
      });
    }

}
