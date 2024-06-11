import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../types/Product.type';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  availableProducts: Array<Product> = [];

  constructor() {

  }

  ngOnInit(): void {
    this.availableProducts = [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Description of product 1',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        description: 'Description of product 2',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'Product 3',
        price: 300,
        description: 'Description of product 3',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 4,
        name: 'Product 4',
        price: 400,
        description: 'Description of product 4',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 5,
        name: 'Product 5',
        price: 500,
        description: 'Description of product 5',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ]
  }
}
