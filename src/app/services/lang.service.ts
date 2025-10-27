import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lang } from '../types/lang.type';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private storageKey = 'activeLang';

  private langSubject = new BehaviorSubject<Lang>(
    (localStorage.getItem(this.storageKey) as Lang) || 'EN'
  );
  lang$ = this.langSubject.asObservable();

  get activeLang(): Lang {
    return this.langSubject.value;
  }

  switchLang(lang: Lang) {
    this.langSubject.next(lang);
    localStorage.setItem(this.storageKey, lang);
  }
}