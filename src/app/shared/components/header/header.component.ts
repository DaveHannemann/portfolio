import { Component, OnInit } from '@angular/core';
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
  headerVisible = false;
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
}
