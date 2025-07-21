import { Injectable } from '@angular/core';
import {Book} from './book.interface';
import {BehaviorSubject, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart$: BehaviorSubject<Book[]> =
    new BehaviorSubject<Book[]>([]);

  numberOfItems$: Observable<number> =
    this.cart$.pipe(map(books => books.length));

  getCart(): Observable<Book[]> {
    return this.cart$.asObservable();
  }

  addToCart(book: Book) {
    // this.cart.push(book);
    this.cart$.next([...this.cart$.value, book]);
  }

  removeFromCart(book: Book) {
    // this.cart = this.cart.filter(item => item.id !== book.id);
    this.cart$.next(this.cart$.value.filter(item => item.id !== book.id));
  }
}
