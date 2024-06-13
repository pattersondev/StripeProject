import { Component } from '@angular/core';
import { StripeService } from '../../services/stripe.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  constructor(private stripeService: StripeService) {

  }

  async redirectToStripeCheckout() {
    await this.stripeService.redirectToCheckout(environment.priceId);
  }
}
