import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {Book} from './book.interface';
import {BookComponent} from './book/book';
import {Auth} from './auth';
import {CartService} from './cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    BookComponent,
    RouterOutlet,
    RouterLink
  ],

  styleUrl: './app.scss'
})
export class App {


  authService = inject(Auth);
  // isLoggedIn = this.authService.userName !== undefined;
  isLoggedIn = false;
  router = inject(Router);
  cartService = inject(CartService);

  numberOfItems = 0;

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  constructor() {
    this.authService.userName$
      .subscribe((userName) =>
        this.isLoggedIn = userName !== undefined);

    this.cartService.numberOfItems$
      .subscribe((numberOfItems) =>
        this.numberOfItems = numberOfItems)

  }
}
