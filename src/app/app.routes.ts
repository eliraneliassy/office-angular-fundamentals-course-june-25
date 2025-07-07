import { Routes } from '@angular/router';
import {Feed} from './feed/feed';
import {Cart} from './cart/cart';
import {Product} from './product/product';
import {Login} from './login/login';
import {Register} from './register/register';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
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
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      }
    ]
  }
];
