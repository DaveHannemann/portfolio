import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UiService {
  private headerVisibleSource = new BehaviorSubject<boolean>(false);
  headerVisible$ = this.headerVisibleSource.asObservable();

  toggleHeader() {
    this.headerVisibleSource.next(!this.headerVisibleSource.value);
  }

  setHeaderVisible(value: boolean) {
    this.headerVisibleSource.next(value);
  }
}