import {Component, inject} from '@angular/core';
import {BookComponent} from '../book/book';
import {Book} from '../book.interface';
import {ActivatedRoute} from '@angular/router';
import {BOOKS} from '../BOOKS';

@Component({
  selector: 'app-product',
  imports: [
    BookComponent
  ],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  bookId = this.activatedRoute.snapshot.params['id'];

  book: Book | undefined = BOOKS.find(book => book.id === this.bookId);

}
