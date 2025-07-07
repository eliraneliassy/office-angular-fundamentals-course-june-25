import {Component, inject} from '@angular/core';
import {BookComponent} from '../book/book';
import {Book} from '../book.interface';
import {CartService} from '../cart';
import {BOOKS} from '../BOOKS';
import {BooksService} from '../books-service';

@Component({
  selector: 'app-feed',
  imports: [
    BookComponent
  ],
  templateUrl: './feed.html',
  styleUrl: './feed.scss'
})
export class Feed {
  books: Book[] = [];

  cartService: CartService = inject(CartService);
  booksService: BooksService = inject(BooksService);

  constructor() {
    this.booksService.getBooks('Harry Potter').subscribe(
      (res: Book[])=> this.books = res
    )
  }

  addToCartInApp(book: Book) {
    this.cartService.addToCart(book);
  }
}
