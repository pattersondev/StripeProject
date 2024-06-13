import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../types/Product.type';
import { MatPaginator } from '@angular/material/paginator';
import { BannerComponent } from '../banner/banner.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { StripeService } from '../../services/stripe.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, BannerComponent, NavbarComponent, MatCardModule],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.scss'
})
export class CartViewComponent implements OnInit {

  cartDataSource!: MatTableDataSource<Product, MatPaginator>;
  displayedColumns = ['imageUrl', 'name', 'price', 'remove'];
  disableCheckout = false;

  constructor(private productService: ProductService, private stripeService: StripeService) { }

  ngOnInit() {
    this.cartDataSource = new MatTableDataSource(this.productService.getCartData());
    console.log(this.cartDataSource);
    this.disableCheckout = this.cartDataSource.data.length === 0;
  }

  async redirectToStripeCheckout() {
    await this.stripeService.redirectToCheckout(this.cartDataSource.data.map(product => product.priceId));
  }

}
