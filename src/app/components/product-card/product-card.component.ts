import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../types/Product.type';
import { ProductService } from '../../services/product.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StripeService } from '../../services/stripe.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatButtonModule, MatTooltipModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  availableProducts: Array<Product> = [];

  constructor(private productService: ProductService, private stripeService: StripeService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.availableProducts = res;
      console.log(this.availableProducts);
    });
  }

  async redirectToStripeCheckout(priceId: string) {
    console.log(priceId);
    await this.stripeService.redirectToCheckout(priceId);
  }
}
