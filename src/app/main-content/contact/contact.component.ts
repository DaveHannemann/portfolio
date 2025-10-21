import { Component } from '@angular/core';
import { ContactformComponent } from './contactform/contactform.component';
import { Lang } from '../../types/lang.type';
import { LangService } from '../../services/lang.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactformComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(
    private scrollService: ScrollService,
    public langService: LangService
  ) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }

  phoneHover = false;
  mailHover = false;

  activeItem: string | null = null;

  setActive(item: string) {
    this.activeItem = item;
  }

  texts = {
    headline: {
      DE: 'Kontaktier mich',
      EN: 'Contact me',
    },
    motive: {
      EN: `Feel free to get in touch with job offers or collaboration opportunities in frontend development. I’m especially interested in roles where I can contribute to building modern, responsive, and user-centered web applications. Through a combination of clean code and thoughtful design, I aim to deliver real value to every project I join.`,
      DE: `Ich freue mich über Jobangebote oder Kooperationsmöglichkeiten im Frontend-Development. Besonders interessieren mich Rollen, in denen ich moderne, responsive und nutzerorientierte Webanwendungen mitgestalten kann. Mit sauberem Code und einem Auge für Design trage ich dazu bei, jedem Projekt echten Mehrwert zu bieten.`,
    },
    team: {
      DE: 'Lass uns zusammen arbeiten!',
      EN: 'Let us work together!',
    },
  };
}
