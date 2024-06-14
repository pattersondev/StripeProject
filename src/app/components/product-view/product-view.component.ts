import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../types/Product.type';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [BannerComponent, NavbarComponent, MatButtonModule, MatCardModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent {

  product: Product = {} as Product;
  currentlyInCart: Array<Product> = [];

  constructor(private route: ActivatedRoute, private productService: ProductService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.getProductById(params['id']).subscribe(res => {
        this.product = res;
      });
    });

    this.currentlyInCart = this.productService.getCartData();
  }

  addToCart(product: Product) {
    this.currentlyInCart.push(product);
    this.productService.setCartData(this.currentlyInCart);
    this.snackbar.open(`Added ${product.name} To Cart`, 'Close', { duration: 2000 });
  }
}
