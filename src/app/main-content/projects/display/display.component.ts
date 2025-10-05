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
    'Pokédex': {
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
      images: [
        'assets/img/angular_learn.png',
        'assets/img/typescript_learn.png',
        'assets/img/firebase_learn.png',
      ],
      projectPicture: 'assets/img/soon.png',
      links: {
        live: '',
        github: '',
      },
    },
  };
}
