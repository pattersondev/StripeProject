import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [
        {
            path: 'checkout/:id',
            component: CheckoutComponent
        },
        {
            path: 'product/:id',
            component: ProductViewComponent
        }
    ]
}];
