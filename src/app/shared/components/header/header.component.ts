import { Component } from '@angular/core';
import { LangService } from '../../../services/lang.service';
import { Lang } from '../../../types/lang.type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection: string = '';

  constructor(public langService: LangService) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  switchLang(lang: Lang) {
    this.langService.switchLang(lang);
  }

  texts = {
    why: {
      DE: 'Warum ich',
      EN: 'Why me',
    },
    skill: {
      DE: 'Fähigkeiten',
      EN: 'Skills',
    },
    project: {
      DE: 'Projekte',
      EN: 'Projects',
    },
    contact: {
      DE: 'Kontakt',
      EN: 'Contact',
    },
  };

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const target = document.getElementById(sectionId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
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

      if (t < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}
