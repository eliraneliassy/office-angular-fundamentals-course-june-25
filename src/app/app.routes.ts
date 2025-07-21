import {Routes} from '@angular/router';
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
    // component: Feed,
    loadComponent: () =>
      import('./../app/feed/feed').then(c => c.Feed),
    // canActivate: [authGuard]
    canActivate: [authGuard]
  },
  {
    path: 'cart',
    // component: Cart,
    loadComponent: () =>
      import('./../app/cart/cart').then(c => c.Cart),
    canActivate: [authGuard]
  },
  {
    path: 'product/:id',
    // component: Product,
    loadComponent: () =>
      import('./../app/product/product').then(c => c.Product),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        // component: Login
        loadComponent: () =>
          import('./../app/login/login').then(c => c.Login),
      },
      {
        path: 'register',
        // component: Register
        loadComponent: () =>
          import('./../app/register/register').then(c => c.Register),
      }
    ]
  }


];
