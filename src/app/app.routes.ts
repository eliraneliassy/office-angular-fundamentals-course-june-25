import { Routes } from '@angular/router';
import {Feed} from './feed/feed';
import {Cart} from './cart/cart';
import {Product} from './product/product';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    component: Feed
  },
  {
    path: 'cart',
    component: Cart
  },
  {
    path: 'product/:id',
    component: Product
  }
];
