import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LangService } from '../../../services/lang.service';
import { Lang } from '../../../types/lang.type';

@Component({
  selector: 'app-organise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organise.component.html',
  styleUrl: './organise.component.scss',
})
export class OrganiseComponent {
  constructor(public langService: LangService) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  @Input() project!: string;

  projectData: any = {
    dabubble: {
      text: {
        DE: 'Diese Informationen folgen nach Abschluss des Projekts.',
        EN: 'This info will come after the project is finished.',
      },
    },
    sharkie: {
      text: {
        DE: 'Zuerst habe ich eine Mini-Karte gezeichnet, um mir zu visualisieren, was benötigt wird. Dann habe ich das Projekt in viele Klassen aufgeteilt, um den Code sauber und organisiert zu halten. Tests waren schwierig wegen des Gleichgewichts zwischen schwer und leicht, also habe ich einige Kollegen und meine Neffen einbezogen.',
        EN: 'At first, I drew a mini map to visualize what is needed. Then I split the project into many classes to keep the code clean and organized. Testing was difficult because of the balance between hard and easy, so I involved some colleagues as well as my nephews.',
      },
    },
    join: {
      text: {
        DE: 'Wir nutzten ein Kanban-Board, um unsere Aufgaben zu organisieren. Jedes Mitglied war für unterschiedliche Teile des Projekts verantwortlich, aber wir halfen uns gegenseitig bei Bedarf. Wöchentliche Meetings wurden gehalten, um Fortschritte und Probleme zu besprechen und das Board zu aktualisieren.',
        EN: 'We used a Kanban Board to organize our tasks. Each member was responsible for different parts of the project, but we helped each other if needed. Weekly meetings were held to discuss progress and problems and update the board.',
      },
    },
    pokedex: {
      text: {
        DE: 'Ich habe eine Liste erstellt, was ich anzeigen möchte und wie. Dann habe ich es mit einem Kanban-Board in verschiedene Aufgaben aufgeteilt, um das Projekt Schritt für Schritt zu bauen. Jede Funktion hat ihren eigenen Zweck.',
        EN: 'I made a list of what I want to display and how. Then I split it using a Kanban Board into different tasks to build the project step by step. Every function has its own purpose.',
      },
    },
  };
}
