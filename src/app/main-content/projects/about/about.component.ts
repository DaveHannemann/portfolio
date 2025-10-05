import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @Input() project!: string;

  projectData: any = {
    'DA Bubble': {
      duration: 'TBD',
      text: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    },
    Sharkie: { duration: '3 Weeks', text: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.' },
    Join: { duration: '2 Months', text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ' },
    'Pokédex': { duration: '2 Weeks', text: 'API based app to display all pokemon stats, evo-chain, species etc.' },
    'Ongoing Project': {
      duration: 'TBD',
      text: 'Next Project will be DA Bubble to finish my graduation @Developer Akademie',
    },
  };
}
