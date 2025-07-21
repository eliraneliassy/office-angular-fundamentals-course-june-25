import {Component, DestroyRef, DoCheck, inject, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {BookComponent} from "../book/book";
import {Book} from '../book.interface';
import {CartService} from '../cart';
import {Observable, of, Subscription, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [
    BookComponent,
    AsyncPipe
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements DoCheck, OnDestroy {

  cartService: CartService = inject(CartService);

  cart$: Observable<Book[]> = of([]);// this.cartService.cart;

  interval: any;

  destoryRef = inject(DestroyRef).onDestroy(() => {

  });

  constructor() {
    this.cart$ = this.cartService.getCart()
      .pipe(
        tap(() => {
          let i = 0;
          this.interval = setInterval(() => {
            i = i+1;
            console.log('Interval - CART COMPONENT', i);
          }, 1000)
        }),
        takeUntilDestroyed()
      )

  }

  ngOnDestroy(): void {

        clearInterval(this.interval);
    }

  ngDoCheck(): void {
        // console.log('Do Check - CART COMPONENT');
    }

  ngOnChanges(changes: SimpleChanges): void {
        console.log('On Changes - CART COMPONENT', changes);
    }


  removeFromCart(book: Book) {
    this.cartService.removeFromCart(book);
  }
}
