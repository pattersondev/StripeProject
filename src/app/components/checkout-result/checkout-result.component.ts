import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StripeService } from '../../services/stripe.service';

@Component({
  selector: 'app-checkout-result',
  standalone: true,
  templateUrl: './checkout-result.component.html',
  styleUrl: './checkout-result.component.scss'
})
export class CheckoutResultComponent implements OnInit {

  constructor(private route: ActivatedRoute, private stripeService: StripeService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }
}
