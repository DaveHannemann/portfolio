import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Lang } from '../../../types/lang.type';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-bubble',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.scss',
})
export class BubbleComponent {
    constructor(
      public langService: LangService,
    ) {}
  
    get activeLang(): Lang {
      return this.langService.activeLang;
    }

  hoverIndex: number | null = null;

feedbackData = [
  {
    name: 'Gustav G.',
    linkedin: '',
    text: {
      EN: { class: 'Project', project: 'Join', message: 'Amazing work!' },
      DE: { class: 'Projekt', project: 'Join', message: 'Großartige Arbeit!' },
    },
  },
  {
    name: 'Donald D.',
    linkedin: '',
    text: {
      EN: { class: 'Project', project: 'Pokédex', message: 'Just wow!' },
      DE: { class: 'Projekt', project: 'Pokédex', message: 'Einfach wow!' },
    },
  },
  {
    name: 'Peter P.',
    linkedin: '',
    text: {
      EN: {
        class: 'Teammate',
        project: 'Football',
        message: 'Clean code structure and smart logic.',
      },
      DE: {
        class: 'Teamkollege',
        project: 'Fußball',
        message: 'Saubere Code-Struktur und clevere Logik.',
      },
    },
  },
];
}
