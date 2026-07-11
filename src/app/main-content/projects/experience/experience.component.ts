import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LangService } from '../../../services/lang.service';
import { Lang } from '../../../types/lang.type';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  constructor(public langService: LangService) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  @Input() project!: string;

  projectData: any = {
    dabubble: {
      title: {
        DE: 'Meine Gruppenerfahrung',
        EN: 'My group work experience',
      },
      text: {
        DE: 'Ein schönes Projekt, dass sehr viel Spaß gemacht hat. Wir waren ein Team aus drei Leuten, haben uns erst um die Struktur Gedanken gemacht, dann hat sich jede eine Aufgabe geschnappt und so wurde die App stetig gebaut, auch Dank der offenen und verbindlichen Kommunikation im Team.',
        EN: 'A lovely project that was a lot of fun. We were a team of three people: first we thought about the overall structure, then each of us took on a task, and step by step the app was built. Thanks in large part to the open, clear, and reliable communication within the team.',
      },
      links: {
        live: 'https://david-hannemann.de/dabubble',
        github: 'https://github.com/DaveHannemann/DABubble',
      },
    },
    sharkie: {
      title: {
        DE: 'Was ich gelernt habe',
        EN: 'What I have learned',
      },
      text: {
        DE: 'Ein besonderes Projekt, weil ich viele neue Dinge lernen musste. Ich lernte, wie man das Canvas nutzt, Klassen und Objekte erstellt und animiert, Kollisionen behandelt und eine Game Loop aufbaut.',
        EN: 'A special project for me, because I had to learn a lot of new things. I learned how to handle the canvas, create classes and objects, animate them, handle collisions, and build a game loop.',
      },
      links: {
        live: 'https://david-hannemann.de/Sharkie',
        github: 'https://github.com/DaveHannemann/Sharkie',
      },
    },
    join: {
      title: {
        DE: 'Meine Gruppenerfahrung',
        EN: 'My group work experience',
      },
      text: {
        DE: 'Wir waren ein Team von drei Personen. Ich war zunächst für die Hauptstruktur des Boards verantwortlich, dann für die Zusammenfassungsseite, und am Ende haben wir gemeinsam Board und Kontakte fertiggestellt. Es war ein reibungsloses Teamwork mit viel Spaß und gegenseitiger Unterstützung.',
        EN: 'We were a group of 3. My role was first to create the main structure of the board, then I took care of the summary page, and after that, we came together to finish the board and contacts main process. It was smooth teamwork with a lot of fun and mutual help.',
      },
      links: {
        live: 'https://david-hannemann.de/JoinBoard',
        github: 'https://github.com/DaveHannemann/JoinBoard',
      },
    },
    pokedex: {
      title: {
        DE: 'Was ich gelernt habe',
        EN: 'What I have learned',
      },
      text: {
        DE: 'Als erstes Projekt mit einer API brauchte ich etwas Zeit, um zu verstehen, was nötig ist und was nicht. Ich lernte, wie man APIs nutzt, Daten anzeigt und machte meine ersten Schritte mit CSS-Animationen.',
        EN: 'As the first app using an API, it took me some time to evaluate what’s needed and what’s not. I learned how to handle APIs, display data, and made my first steps with CSS animations.',
      },
      links: {
        live: 'https://david-hannemann.de/Pokedex',
        github: 'https://github.com/DaveHannemann/PokeDex',
      },
    },
    kanmind: {
      title: {
        DE: 'Was ich gelernt habe',
        EN: 'What I have learned',
      },
      text: {
        DE: 'Als erstes Backend-Projekt brauchte ich etwas Zeit, um mich zu orientieren. Dabei lernte ich, wie man ein vollständiges Backend aufbaut, Datenbanken nutzt und APIs erstellt.',
        EN: 'As my first backend project, it took me some time to find my footing. Throughout the process, I learned how to build a complete backend, work with databases, and develop APIs.',
      },
      links: {
        live: 'https://david-hannemann.de/KanMind',
        github: 'https://github.com/DaveHannemann/KanMind',
      },
    },
    quizly: {
      title: {
        DE: 'Was ich gelernt habe',
        EN: 'What I have learned',
      },
      text: {
        DE: 'In diesem Projekt habe ich meine Fähigkeiten im Umgang mit APIs und Datenbanken weiter vertieft. Ich habe gelernt, wie man Quizfragen mit KI generieren lässt und sie in einer Datenbank speichert, um sie dann in der App anzuzeigen.',
        EN: 'In this project, I further strengthened my skills in working with APIs and databases. I learned how to generate quiz questions using AI and store them in a database so they could be displayed in the app.',
      },
      links: {
        live: 'https://david-hannemann.de/Quizly',
        github: 'https://github.com/DaveHannemann/Quizly',
      },
    },
  };
}
