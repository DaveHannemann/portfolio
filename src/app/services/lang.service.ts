import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lang } from '../types/lang.type';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private langSubject = new BehaviorSubject<Lang>('EN');
  lang$ = this.langSubject.asObservable();

  get activeLang(): Lang {
    return this.langSubject.value;
  }

  switchLang(lang: Lang) {
    this.langSubject.next(lang);
  }
}