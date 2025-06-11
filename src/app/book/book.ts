import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../book.interface';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {DiscountPipe} from '../discount-pipe';

@Component({
  selector: 'app-book',
  imports: [
    CurrencyPipe,
    DatePipe,
    DiscountPipe
  ],
  templateUrl: './book.html',
  styleUrl: './book.scss',

})
export class BookComponent {

  @Input({required: true}) book?: Book;

  @Input() inCart: boolean = false;

  @Output() addToCart = new EventEmitter<Book>();
  @Output() removeFromCart = new EventEmitter<Book>();

  addToCartHandler(book: Book | undefined) {
    this.addToCart.emit(book);
  }

 removeFromCartHandler(book: Book | undefined) {
    this.removeFromCart.emit(book);
  }

}
