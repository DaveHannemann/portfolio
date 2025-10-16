import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  @Input() project!: string;

  projectData: any = {
    'DA Bubble': {
      headline: 'DA Bubble',
      technologie: 'Angular, TypeScript, Firebase',
      duration: 'TBD',
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
    Sharkie: {
      headline: 'Sharkie',
      technologie: 'HTML, CSS, JavaScript',
      duration: '5 weeks',
      images: [
        'assets/img/html_learn.png',
        'assets/img/javascript_learn.png',
        'assets/img/css_learn.png',
      ],
      projectPicture: 'assets/img/sharkie.png',
      links: {
        live: '',
        github: '',
      },
    },
    Join: {
      headline: 'Join',
      technologie: 'HTML, CSS, JavaScript',
      duration: '2 months',
      images: [
        'assets/img/html_learn.png',
        'assets/img/javascript_learn.png',
        'assets/img/css_learn.png',
      ],
      projectPicture: 'assets/img/join.png',
      links: {
        live: '',
        github: '',
      },
    },
    Pokédex: {
      headline: 'Pokédex',
      technologie: 'HTML, CSS, JavaScript, API',
      duration: '2 weeks',
      images: [
        'assets/img/html_learn.png',
        'assets/img/javascript_learn.png',
        'assets/img/css_learn.png',
        'assets/img/api_learn.png',
      ],
      projectPicture: 'assets/img/pokedex.png',
      links: {
        live: '',
        github: '',
      },
    },
    'Ongoing Project': {
      headline: 'Ongoing Project',
      technologie: 'Angular, TypeScript, Firebase',
      images: [
        'assets/img/angular_learn.png',
        'assets/img/typescript_learn.png',
        'assets/img/firebase_learn.png',
      ],
      projectPicture: 'assets/img/soon.jpg',
      links: {
        live: '',
        github: '',
      },
    },
  };
}
