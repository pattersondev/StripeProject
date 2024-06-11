import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Product } from '../../types/Product.type';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, NavbarComponent, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
