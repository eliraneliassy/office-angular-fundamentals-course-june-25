import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Book} from './book.interface';
import {NgForOf} from '@angular/common';
import {BookComponent} from './book/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    BookComponent
  ],

  styleUrl: './app.scss'
})
export class App {
  books: Book[] = [
    {
      title: 'Harry Potter',
      author: 'JK ROlling',
      description: 'Harry Potter - The 1st edition',
      image: 'https://m.media-amazon.com/images/I/51fLJOHOJFL._SY445_SX342_ControlCacheEqualizer_.jpg',
      price: 20,
      id: '1',
      publishDate: new Date(),
    },
    {
      title: 'Harry Potter2',
      author: 'JK ROlling',
      description: 'Harry Potter - The 2st edition',
      image: 'https://m.media-amazon.com/images/I/51IZtAdNrHL._SY445_SX342_ControlCacheEqualizer_.jpg',
      price: 15,
      id: '2'
    },
    {
      title: 'Harry Potter3',
      author: 'JK ROlling',
      description: 'Harry Potter - The 3st edition',
      image: 'https://m.media-amazon.com/images/I/51i+G06iKmL._SY445_SX342_ControlCacheEqualizer_.jpg',
      price: 40,
      id: '3'
    },

  ]
  cart: Book[] = [];

  addToCartInApp(book: Book) {
    this.cart.push(book);
  }

  removeFromCart(book: Book) {
    this.cart = this.cart.filter(item => item.id !== book.id);
  }
}
