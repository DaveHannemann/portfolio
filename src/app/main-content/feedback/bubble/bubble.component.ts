import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.scss',
})
export class BubbleComponent {
  hoverIndex: number | null = null;

  feedbackData = [
    {
      name: 'Gustav G.',
      class: 'Project',
      project: 'Join',
      message: 'Amazing',
      linkedin: '',
    },
    {
      name: 'Donald D.',
      class: 'Project',
      project: 'Pokédex',
      message: 'Just wow!',
      linkedin: '',
    },
    {
      name: 'Peter P.',
      class: 'Teammate',
      project: 'Football',
      message: 'Clean code structure and smart logic.',
      linkedin: '',
    },
  ];
}
