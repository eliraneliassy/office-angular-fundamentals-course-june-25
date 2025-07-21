import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {Book} from './book.interface';
import {BookComponent} from './book/book';
import {Auth} from './auth';
import {CartService} from './cart';
import {map, Observable, of} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    BookComponent,
    RouterOutlet,
    RouterLink,
    AsyncPipe
  ],

  styleUrl: './app.scss'
})
export class App {


  authService = inject(Auth);
  // isLoggedIn = this.authService.userName !== undefined;
  isLoggedIn$: Observable<boolean> = of(false);
  router = inject(Router);
  cartService = inject(CartService);

  numberOfItems$: Observable<number> = this.cartService.numberOfItems$

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  constructor() {
    this.isLoggedIn$ = this.authService.getUser()
      .pipe(
        map((userName) =>
          userName !== undefined)
      )



  }
}
