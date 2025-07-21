import { Routes } from '@angular/router';
import {Feed} from './feed/feed';
import {Cart} from './cart/cart';
import {Product} from './product/product';
import {Login} from './login/login';
import {Register} from './register/register';
import {authGuard} from './auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    component: Feed,
    canActivate: [authGuard]
  },
  {
    path: 'cart',
    component: Cart,
    canActivate: [authGuard]
  },
  {
    path: 'product/:id',
    component: Product,
    canActivate: [authGuard]
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
