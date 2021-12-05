import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public loginStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.loginStatus.next(this.isLoggedIn());
  }

  save(customerInfo: any) {
    sessionStorage.setItem('sess', JSON.stringify(customerInfo));
    this.loginStatus.next(true);
  }

  get() {
    return JSON.parse(sessionStorage.getItem('sess'));
  }

  clear() {
    sessionStorage.removeItem('sess');
    this.loginStatus.next(false);
  }

  isLoggedIn() {
    return !!sessionStorage.getItem('sess');
  }

}