import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StripeService } from '../../services/stripe.service';
import { BannerComponent } from '../banner/banner.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../../services/product.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Product } from '../../types/Product.type';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-checkout-result',
  standalone: true,
  imports: [BannerComponent, NavbarComponent, MatCardModule, MatTableModule],
  templateUrl: './checkout-result.component.html',
  styleUrl: './checkout-result.component.scss'
})
export class CheckoutResultComponent implements OnInit {

  orderData: any;
  customerName: string = '';
  orderDataSource!: MatTableDataSource<Product, MatPaginator>;
  products: Product[] = [];

  displayedColumns = ['imageUrl', 'name', 'price'];

  constructor(private route: ActivatedRoute, private stripeService: StripeService, private productService: ProductService) { }


  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      this.orderData = await this.stripeService.getLineItems(params['id']);
      this.customerName = this.orderData.customerName;
      this.getProducts(this.orderData.lineItems.data.map((product: any) => product.description));
    });
  }

  getProducts(productNames: string[]): void {
    for (let i = 0; i < productNames.length; i++) {
      this.productService.getProductByName(productNames[i]).subscribe(res => {
        console.log(res);
        this.products.push(res[0]);
        this.orderDataSource = new MatTableDataSource(this.products);
        console.log(this.orderDataSource);
      });
    }
  }
}
