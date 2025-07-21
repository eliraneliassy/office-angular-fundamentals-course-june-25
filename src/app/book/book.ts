import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Book} from '../book.interface';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {DiscountPipe} from '../discount-pipe';
import {Router, RouterLink} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {Product} from '../product/product';


@Component({
  selector: 'app-book',
  imports: [
    CurrencyPipe,
    DiscountPipe
  ],
  templateUrl: './book.html',
  styleUrl: './book.scss',

})
export class BookComponent  {

  @Input({required: true}) book?: Book;

  @Input() inCart: boolean = false;

  @Output() addToCart = new EventEmitter<Book>();
  @Output() removeFromCart = new EventEmitter<Book>();

  router = inject(Router);
  dialog = inject(MatDialog);

  addToCartHandler(book: Book | undefined) {
    this.addToCart.emit(book);
  }

 removeFromCartHandler(book: Book | undefined) {
    this.removeFromCart.emit(book);
  }

  goToProduct() {
    // this.router.navigate(['/product', this.book?.id]);
    this.dialog.open(Product, {
      data: this.book,

    }).afterClosed().subscribe(result => {console.log('The dialog was closed', result)});
    //this.router.navigateByUrl('/product/' + id);
  }

}
