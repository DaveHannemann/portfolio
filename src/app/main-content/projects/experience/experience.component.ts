import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LangService } from '../../../services/lang.service';
import { Lang } from '../../../types/lang.type';

@Component({
  selector: 'app-experience',
  standalone: true,
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
    // dabubble: {
    //   title: {
    //     DE: 'Meine Gruppenerfahrung',
    //     EN: 'My group work experience',
    //   },
    //   text: {
    //     DE: 'Diese Informationen folgen nach Abschluss des Projekts.',
    //     EN: 'This info will come after the project is finished.',
    //   },
    //   links: {
    //     live: '',
    //     github: '',
    //   },
    // },
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
  };
}
