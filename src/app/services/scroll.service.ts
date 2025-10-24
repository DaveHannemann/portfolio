import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private _activeSection = new BehaviorSubject<string>('');
  activeSection$ = this._activeSection.asObservable();

  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    if (this.router.url !== '/') {
      this._activeSection.next('');
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.performScroll(sectionId), 100);
      });
    } else {
      this.performScroll(sectionId);
    }
  }

  performScroll(sectionId: string) {
    if (this.router.url === '/') {
      this._activeSection.next(sectionId);
    }

    const target = document.getElementById(sectionId);
    if (!target) return;

    const offset = -80;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY + offset;
    const distance = end - start;
    const maxOvershoot = Math.min(30, Math.abs(distance) * 0.05);
    const duration = 600;

    const easeOutBack = (t: number) => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    };

    const startTime = performance.now();

    const animate = (time: number) => {
      let t = (time - startTime) / duration;
      if (t > 1) t = 1;

      const eased = easeOutBack(t);
      const scrollPosition = start + distance * eased + maxOvershoot * (1 - t);

      window.scrollTo(0, scrollPosition);

      if (t < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}
