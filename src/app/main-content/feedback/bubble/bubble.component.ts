import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';
import { Lang } from '../../../types/lang.type';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-bubble',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.scss',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [animate('400ms ease-in-out', style({ opacity: 0 }))], {
          optional: true,
        }),
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('400ms 200ms ease-in-out', style({ opacity: 1 })),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class BubbleComponent {
  constructor(public langService: LangService) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  hoverIndex: number | null = null;

  feedbackData = [
    {
      name: 'Philipp Gross',
      linkedin: 'https://www.linkedin.com/in/philipp-gross-a34533111/',
      text: {
        EN: { class: 'Friend', project: 'Football', message: 'Dave is extremely reliable and meticulous. His good mood is contagious, and it’s a lot of fun to work with him!' },
        DE: {
          class: 'Freund',
          project: 'ehm. Mitspieler',
          message: 'Dave ist überaus verlässlich und sorgfältig. Seine gute Laune steckt immer an und es macht extrem viel Spaß mit ihm zusammen zu arbeiten!',
        },
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
    {
      name: 'Tony S.',
      linkedin: '',
      text: {
        EN: {
          class: 'Project',
          project: 'Portfolio',
          message: 'Very elegant UI.',
        },
        DE: {
          class: 'Projekt',
          project: 'Portfolio',
          message: 'Sehr elegante UI.',
        },
      },
    },
  ];

  trackByIndex(index: number) {
    return index;
  }
}
