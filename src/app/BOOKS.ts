import {Book} from './book.interface';

export const BOOKS: Book[] = [
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

];
