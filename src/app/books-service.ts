import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Book} from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  httpClient = inject(HttpClient);

  private BASE_URL = `https://www.googleapis.com/books/v1/volumes`



  getBooks(query: string): Observable<Book[]> {
    return this.httpClient.get<any>(`${this.BASE_URL}?q=${query}`)
      .pipe(
        map(response => response.items),
        map((items: any[]) => items.map(item => ({
          title: item.volumeInfo.title,
          author: item.volumeInfo.author,
          description: item.volumeInfo.description,
          image: item.volumeInfo.imageLinks?.thumbnail,
          price: item.volumeInfo.pageCount,
          id: item.id,
          publishDate: item.volumeInfo.publishedDate
        })))
      );
  }
}
