import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  private ls = window.localStorage;
  itemValue = new Subject();

  constructor() { }

  public setItem(key, value) {
    this.ls.setItem(key, value);
    this.itemValue.next({ key, value });
    return true;
  }

  public getItem(key) {
    const value = this.ls.getItem(key);
    return value;
  }

  public clear() {
    this.ls.clear();
  }
}
