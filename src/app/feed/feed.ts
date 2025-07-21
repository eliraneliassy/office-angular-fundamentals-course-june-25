import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BookComponent} from '../book/book';
import {Book} from '../book.interface';
import {CartService} from '../cart';
import {BOOKS} from '../BOOKS';
import {BooksService} from '../books-service';
import {debounceTime, distinctUntilChanged, Observable, of, startWith, Subject, switchMap} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-feed',
  imports: [
    BookComponent,
    AsyncPipe
  ],
  templateUrl: './feed.html',
  styleUrl: './feed.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Feed {
  books$: Observable<Book[]> = of([]);

  cartService: CartService = inject(CartService);
  booksService: BooksService = inject(BooksService);

  search$ = new Subject<string>();

  constructor() {

    this.books$ = this.search$
      .pipe(
        startWith('Angular'),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => term ? this.booksService.getBooks(term) : of([]))
      )

  }

  addToCartInApp(book: Book) {
    this.cartService.addToCart(book);
  }

  search(event: KeyboardEvent) {
    // console.log((event.target as any).value);
    this.search$.next((event.target as any).value);
  }
}
