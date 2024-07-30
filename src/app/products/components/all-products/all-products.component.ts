import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductsModule } from '../../products.module';
import { MaterialModule } from '../../../material/material.module';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';

import { SharedModule } from '../../../shared/shared/shared.module';
import { ProductComponent } from "../product/product.component";
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [ProductsModule, MaterialModule, SpinnerComponent, SharedModule, ProductComponent],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  amount: number = 1;
  productsInCart: any[] = [];
  isLoading: boolean = false;
  addButton: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  one() {
    console.log('One clicked');
    alert('One');
  }

  two() {
    console.log('Two clicked');
    alert('Two');
  }

  getAllProducts() {
    this.isLoading = true;
    this.productsService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  getAllCategories() {
    this.isLoading = true;
    this.productsService.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  FilterCategoriesUseSelect(event: any) {
    const filterValue = event.target.value;
    if (filterValue === 'All') {
      this.getAllProducts();
    } else {
      this.getCategoriesByName(filterValue);
    }
  }

  getCategoriesByName(keysName: string) {
    this.isLoading = true;
    this.productsService.getCategoriesByName(keysName).subscribe(
      (res: any) => {
        this.products = res;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  filterByCategoryUseItem(category: string): void {
    if (category === 'all') {
      this.getAllProducts();
    } else {
      this.getCategoriesByNameUseItem(category);
    }
  }

  getCategoriesByNameUseItem(keysName: string): void {
    this.isLoading = true;
    this.productsService.getCategoriesByName(keysName).subscribe(
      (res: any) => {
        this.products = res;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  showAddToCart(product: any) {
    this.addButton = true;
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.productsInCart = JSON.parse(localStorage.getItem('cart')!);
      this.productsInCart.push(event);
      localStorage.setItem('cart', JSON.stringify(this.productsInCart));

      const existingProduct = this.productsInCart.find((item) => item.item.id == event.item.id);
      if (existingProduct) {
        alert('Product already in cart');
      } else {
        this.productsInCart.push(event);
        localStorage.setItem('cart', JSON.stringify(this.productsInCart));
      }
    } else {
      this.productsInCart.push({ ...event });
      localStorage.setItem('cart', JSON.stringify(this.productsInCart));
    }
    // this.addButton = false;
    // this.amount = 1;
  }

 
 
}
