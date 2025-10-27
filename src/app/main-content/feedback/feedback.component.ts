import { Component } from '@angular/core';
import { BubbleComponent } from './bubble/bubble.component';
import { Lang } from '../../types/lang.type';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [BubbleComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  constructor(public langService: LangService) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  texts = {
    desktop: {
      DE: 'Ihr braucht einen Teamplayer? Das sagen meine Mitmenschen über mich',
      EN: 'Need a teamplayer? Here’s what my colleagues said about me',
    },
    mobileHeadline: {
      DE: 'Need a teamplayer?',
      EN: 'Ihr braucht einen Teamplayer?',
    },
    mobileSpan: {
      DE: 'Das sagen meine Teammitglieder über mich',
      EN: 'Here’s what my colleagues said about me',
    },
  };
}
