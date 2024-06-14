import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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
            path: 'products/:id',
            component: ProductViewComponent
        },
        {
            path: 'checkout/result/:id',
            component: CheckoutResultComponent
        },
        {
            path: 'cart-view',
            component: CartViewComponent
        },
    ]
},
{
    path: '**',
    component: HomeComponent,
}
];