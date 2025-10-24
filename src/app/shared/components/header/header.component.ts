import { Component, HostListener, Input, OnInit } from '@angular/core';
import { LangService } from '../../../services/lang.service';
import { Lang } from '../../../types/lang.type';
import { ScrollService } from '../../../services/scroll.service';
import { UiService } from '../../../services/user-interface.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() headerFixed = false;
  headerVisible = false;
  burgerHover = false;
  activeSection: string = '';

  constructor(
    public langService: LangService,
    private scrollService: ScrollService,
    private ui: UiService
  ) {
    this.scrollService.activeSection$.subscribe(
      (section) => (this.activeSection = section)
    );
  }

  toggleHeader() {
    this.ui.toggleHeader();
  }

  ngOnInit() {
    this.ui.headerVisible$.subscribe((v) => (this.headerVisible = v));
  }

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

  scrollTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.headerVisible && window.scrollY > 60) {
      this.ui.setHeaderVisible(false);
    }
    const sections = ['landing', 'why-me', 'skills', 'projects', 'contact'];
    let found = false;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const inView =
        rect.top <= window.innerHeight * 0.2 &&
        rect.bottom >= window.innerHeight * 0.2;

      if (inView) {
        this.activeSection = id;
        found = true;
        break;
      }
    }

    if (
      !found &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
    ) {
      this.activeSection = 'contact';
    }
    const wasFixed = this.headerFixed;
    this.headerFixed = window.scrollY > 200;

    if (wasFixed !== this.headerFixed) {
    }
  }
}
