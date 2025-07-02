import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Book} from './book.interface';
import {BookComponent} from './book/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    BookComponent,
    RouterOutlet,
    RouterLink
  ],

  styleUrl: './app.scss'
})
export class App {




}
