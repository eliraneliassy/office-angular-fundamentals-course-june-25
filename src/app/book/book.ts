import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Book} from '../book.interface';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {DiscountPipe} from '../discount-pipe';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [
    CurrencyPipe,
    DiscountPipe,
    RouterLink
  ],
  templateUrl: './book.html',
  styleUrl: './book.scss',

})
export class BookComponent {

  @Input({required: true}) book?: Book;

  @Input() inCart: boolean = false;

  @Output() addToCart = new EventEmitter<Book>();
  @Output() removeFromCart = new EventEmitter<Book>();

  router = inject(Router);

  addToCartHandler(book: Book | undefined) {
    this.addToCart.emit(book);
  }

 removeFromCartHandler(book: Book | undefined) {
    this.removeFromCart.emit(book);
  }

  goToProduct() {
    this.router.navigate(['/product', this.book?.id]);
    //this.router.navigateByUrl('/product/' + id);
  }
}
