import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CheckoutResultComponent } from './components/checkout-result/checkout-result.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
    pathMatch: 'full', // ensures that only empty path is matched
},
{
    path: '',
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
            path: 'cart-view',
            component: CartViewComponent
        },
        {
            path: 'checkout/result/:id',
            component: CheckoutResultComponent
        }
    ]
},
{
    path: '**',
    component: HomeComponent,
}
];