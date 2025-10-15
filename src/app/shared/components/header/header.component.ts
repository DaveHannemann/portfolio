import { Component } from '@angular/core';
import { LangService } from '../../../services/lang.service';
import { Lang } from '../../../types/lang.type';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection: string = '';

  constructor(
    public langService: LangService,
    private scrollService: ScrollService
  ) {
    this.scrollService.activeSection$.subscribe(
      (section) => (this.activeSection = section)
    );
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
}
