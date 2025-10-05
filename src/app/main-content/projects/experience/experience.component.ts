import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() project!: string;

  projectData: any = {
    Bubble: {
      title: 'My group work experience',
      text: 'This info will come after the project is finished.',
    },
    Sharkie: {
      title: 'What I have learned',
      text: 'A special project for me, because I had to learn a lot of new things. I learned how to handle the canvas, how to create classes and objects and how to animate them. I also learned how to handle collisions and how to create a game loop.',
    },
    Join: {
      title: 'My group work experience',
      text: 'We were a group of 3. My role was first to create the main structure of the board, then I took care of the summary page and after that we came together to finish the board and contacts main process. It was a fluent teamwork with a lot of fun and helping each other.',
    },
    Pokedex: {
      title: 'What I have learned',
      text: 'As the first app for API, it took me some time to evaluate whats neeeded and whats not. I learned how to handle API, how to display the data and my first steps with CSS animation',
    },
  };
}
