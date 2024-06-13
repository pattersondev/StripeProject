import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CheckoutResultComponent } from './components/checkout-result/checkout-result.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [
        {
            path: 'checkout',
            component: CheckoutComponent
        },
        {
            path: 'product',
            component: ProductViewComponent
        },
        {
            path: 'checkout/result',
            component: CheckoutResultComponent
        },
        {
            path: '**',
            component: HomeComponent,
        }
    ]
}];
