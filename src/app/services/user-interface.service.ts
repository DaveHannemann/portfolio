import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UiService {
  private headerVisibleSource = new BehaviorSubject<boolean>(false);
  headerVisible$ = this.headerVisibleSource.asObservable();

  toggleHeader() {
    const newValue = !this.headerVisibleSource.value;
    this.setHeaderVisible(newValue);
  }

  setHeaderVisible(value: boolean) {
    this.headerVisibleSource.next(value);
    document.body.classList.toggle('no-scroll', value);
    document.documentElement.classList.toggle('no-scroll', value);
  }
}