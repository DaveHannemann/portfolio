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
  visibleFeedback: any[] = [];
  private currentIndex = 0;
  private intervalId?: ReturnType<typeof setInterval>;

  feedbackData = [
    {
      name: 'Gustav G.',
      linkedin: '',
      text: {
        EN: { class: 'Project', project: 'Join', message: 'Amazing work!' },
        DE: {
          class: 'Projekt',
          project: 'Join',
          message: 'Großartige Arbeit!',
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

  ngOnInit() {
    this.updateVisible();
    this.intervalId = setInterval(() => this.nextBatch(), 6000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateVisible() {
    const total = this.feedbackData.length;
    const start = this.currentIndex;
    const end = Math.min(start + 3, total);
    this.visibleFeedback = this.feedbackData.slice(start, end);
  }

  private nextBatch() {
    const total = this.feedbackData.length;
    this.currentIndex += 3;
    if (this.currentIndex >= total) this.currentIndex = 0;
    this.updateVisible();
  }

  trackByIndex(index: number) {
    return index;
  }
}
