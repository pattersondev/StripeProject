import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../types/Product.type';
import { ProductService } from '../../services/product.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatButtonModule, MatTooltipModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  availableProducts: Array<Product> = [];
  currentlyInCart: Array<Product> = [];

  constructor(private productService: ProductService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.availableProducts = res;
    });
    this.currentlyInCart = this.productService.getCartData();
  }

  onCardClick(productId: number) {
    this.router.navigate(['products', productId]);
  }

  addToCart(product: Product) {
    this.currentlyInCart.push(product);
    this.productService.setCartData(this.currentlyInCart);
    this.snackbar.open(`Added ${product.name} To Cart`, 'Close', { duration: 2000 });
  }
}
