import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LangService } from '../../../services/lang.service';
import { Lang } from '../../../types/lang.type';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(public langService: LangService) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  @Input() project!: string;

  projectData: any = {
    dabubble: {
      duration: { DE: 'TBD', EN: 'TBD' },
      text: {
        DE: 'Diese App ist ein Slack-Klon. Sie revolutioniert Teamkommunikation und Zusammenarbeit mit intuitiver Oberfläche, Echtzeitnachrichten und klarer Kanalstruktur.',
        EN: 'This app is a Slack clone. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      },
    },
    sharkie: {
      duration: { DE: '3 Wochen', EN: '3 Weeks' },
      text: {
        DE: 'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.',
        EN: 'A simple jump-and-run game based on an object-oriented approach. Help Sharkie find coins and poison bottles to fight the killer whale.',
      },
    },
    join: {
      duration: { DE: '2 Monate', EN: '2 Months' },
      text: {
        DE: 'Ein Aufgabenmanager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop, weise Benutzer und Kategorien zu.',
        EN: 'Task manager inspired by the Kanban system. Create and organize tasks using drag-and-drop, assign users and categories.',
      },
    },
    pokedex: {
      duration: { DE: '2 Wochen', EN: '2 Weeks' },
      text: {
        DE: 'API-basierte App zur Anzeige von Pokémon-Statistiken, Evolutionsketten und Arten.',
        EN: 'API-based app to display Pokémon stats, evolution chains, and species.',
      },
    },
    ongoing: {
      text: {
        DE: 'Nächstes Projekt ist DA Bubble, um meinen Abschluss bei der Developer Akademie zu beenden.',
        EN: 'Next project will be DA Bubble to finish my graduation at Developer Akademie.',
      },
    },
  };
}
