import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private userName$:
    BehaviorSubject<string | undefined | null> = new BehaviorSubject<string | undefined | null>(undefined);

  isLoggedIn$: Observable<boolean> = this.userName$
    .pipe(map(name => name !== undefined)) ;

  getUser() {
    return this.userName$.asObservable();
  }


  login(name: string | undefined | null) {
    // this.userName = name;
    this.userName$.next(name);
  }

  logout(){
    // this.userName = undefined;
    this.userName$.next(undefined);
  }


}
