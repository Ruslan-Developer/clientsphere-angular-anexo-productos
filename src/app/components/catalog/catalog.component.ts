import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SharingDataService } from '../../services/sharing-data.service';
import { ProductService } from '../../services/product.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCardComponent, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {

  products!: Product[];
  productsApi!: Product[];

  constructor(
    private productService: ProductService,
    private sharingDataService: SharingDataService) { }
  
  ngOnInit(): void {
      this.products = this.productService.findAll();
     
     this.productService.findAllProducts().subscribe(data => {
      this.productsApi = data;
     },
     error => {
       console.log('Error: ', error);
     }
    );
    
  }

  onAddCart(product: Product) {
    this.sharingDataService.productEventEmitter.emit(product);
  }

}
