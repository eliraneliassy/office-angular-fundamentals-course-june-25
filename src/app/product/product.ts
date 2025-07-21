import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BookComponent} from '../book/book';
import {Book} from '../book.interface';
import {ActivatedRoute} from '@angular/router';
import {BOOKS} from '../BOOKS';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-product',
  imports: [
    BookComponent,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './product.html',
  styleUrl: './product.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Product {
  // activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  //
  // bookId = this.activatedRoute.snapshot.params['id'];
  //
  // book: Book | undefined = BOOKS.find(book => book.id === this.bookId);

  data: Book = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);

  constructor() {

    console.log('Product', this.data);
  }

  back() {
    this.dialogRef.close('Hello Moshe');
  }
}
