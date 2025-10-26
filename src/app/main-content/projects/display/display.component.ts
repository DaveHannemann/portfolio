import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LangService } from '../../../services/lang.service';
import { Lang } from '../../../types/lang.type';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  constructor(public langService: LangService) {}
  @Input() project!: string;

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  projectData: any = {
    dabubble: {
      headline: 'DA Bubble',
      technologie: {
        DE: 'Angular, TypeScript, Firebase',
        EN: 'Angular, TypeScript, Firebase',
      },
      tech: { DE: 'Technologien', EN: 'Technologies' },
      time: { DE: 'Dauer', EN: 'Duration' },
      duration: { DE: 'TBD', EN: 'TBD' },
      images: [
        'assets/img/angular_learn.png',
        'assets/img/typescript_learn.png',
        'assets/img/firebase_learn.png',
      ],
      projectPicture: 'assets/img/dabubble.jpg',
      links: {
        live: '',
        github: '',
      },
    },
    sharkie: {
      headline: 'Sharkie',
      technologie: {
        DE: 'HTML, CSS, JavaScript',
        EN: 'HTML, CSS, JavaScript',
      },
      tech: { DE: 'Technologien', EN: 'Technologies' },
      time: { DE: 'Dauer', EN: 'Duration' },
      duration: { DE: '5 Wochen', EN: '5 weeks' },
      images: [
        'assets/img/html_learn.png',
        'assets/img/javascript_learn.png',
        'assets/img/css_learn.png',
      ],
      projectPicture: 'assets/img/sharkie.png',
      links: {
        live: '',
        github: 'https://github.com/DaveHannemann/Sharkie',
      },
    },
    join: {
      headline: 'Join',
      technologie: {
        DE: 'HTML, CSS, JavaScript',
        EN: 'HTML, CSS, JavaScript',
      },
      tech: { DE: 'Technologien', EN: 'Technologies' },
      time: { DE: 'Dauer', EN: 'Duration' },
      duration: { DE: '2 Monate', EN: '2 months' },
      images: [
        'assets/img/html_learn.png',
        'assets/img/javascript_learn.png',
        'assets/img/css_learn.png',
      ],
      projectPicture: 'assets/img/join.png',
      links: {
        live: '',
        github: 'https://github.com/DaveHannemann/JoinBoard',
      },
    },
    pokedex: {
      headline: 'Pokédex',
      technologie: {
        DE: 'HTML, CSS, JavaScript, API',
        EN: 'HTML, CSS, JavaScript, API',
      },
      tech: { DE: 'Technologien', EN: 'Technologies' },
      time: { DE: 'Dauer', EN: 'Duration' },
      duration: { DE: '2 Wochen', EN: '2 weeks' },
      images: [
        'assets/img/html_learn.png',
        'assets/img/javascript_learn.png',
        'assets/img/css_learn.png',
        'assets/img/api_learn.png',
      ],
      projectPicture: 'assets/img/pokedex.png',
      links: {
        live: '',
        github: 'https://github.com/DaveHannemann/PokeDex',
      },
    },
    ongoing: {
      headline: { DE: 'Aktuelles Project', EN: 'Ongoing Project' },
      technologie: {
        DE: 'Angular, TypeScript, Firebase',
        EN: 'Angular, TypeScript, Firebase',
      },
      tech: { DE: 'Technologien', EN: 'Technologies' },
      time: { DE: 'Dauer', EN: 'Duration' },
      images: [
        'assets/img/angular_learn.png',
        'assets/img/typescript_learn.png',
        'assets/img/firebase_learn.png',
      ],
      projectPicture: 'assets/img/soon.jpg',
    },
  };
}
