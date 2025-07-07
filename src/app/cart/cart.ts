import {Component, inject} from '@angular/core';
import {BookComponent} from "../book/book";
import {Book} from '../book.interface';
import {CartService} from '../cart';

@Component({
  selector: 'app-cart',
    imports: [
        BookComponent
    ],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

  cartService: CartService = inject(CartService);

  cart: Book[] = [];// this.cartService.cart;

  constructor() {
    this.cartService.getCart().subscribe(
      (res: Book[])=> this.cart = res
    )
  }


  removeFromCart(book: Book) {
    this.cartService.removeFromCart(book);
  }
}
