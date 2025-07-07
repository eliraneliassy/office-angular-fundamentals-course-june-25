import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  userName$:
    BehaviorSubject<string | undefined | null> = new BehaviorSubject<string | undefined | null>(undefined);

  login(name: string | undefined | null) {
    // this.userName = name;
    this.userName$.next(name);
  }

  logout(){
    // this.userName = undefined;
    this.userName$.next(undefined);
  }


}
