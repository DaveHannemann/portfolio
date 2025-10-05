import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-organise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organise.component.html',
  styleUrl: './organise.component.scss',
})
export class OrganiseComponent {
  @Input() project!: string;

  projectData: any = {
    'DA Bubble': {
      text: 'This info will come after the project is finished.',
    },
    Sharkie: {
      text: 'At first, I drawed an mini map to picture myself what is needed. Then I spltted the project in many classes to keep the code clean and organized. Testing was difficult, because of the balance between hard and easy, so I chose some colleagues as well as my nephews',
    },
    Join: {
      text: 'We used a Kanban Board to organize our tasks. Each member was responsible for different parts of the project, but we helped each other if needed. We had weekly meetings to discuss our progress and problems and update our board.',
    },
    'Pokédex': { text: 'I made a list of what I want to display and how. Then I splitted it using a Kanban Board into different tasks to build the project step by step. Every function has its own purpose.' },
  };
}
