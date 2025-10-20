import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { OrganiseComponent } from './organise/organise.component';
import { ExperienceComponent } from './experience/experience.component';
import { DisplayComponent } from './display/display.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LangService } from '../../services/lang.service';
import { Lang } from '../../types/lang.type';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AboutComponent,
    OrganiseComponent,
    ExperienceComponent,
    DisplayComponent,
    MenubarComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(public langService: LangService) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  texts = {
    headline: { DE: 'Meine Projekte', EN: 'My Projects' },
  };

  projects = [
    { key: 'dabubble', DE: 'DA Bubble', EN: 'DA Bubble' },
    { key: 'sharkie', DE: 'Sharkie', EN: 'Sharkie' },
    { key: 'join', DE: 'Join', EN: 'Join' },
    { key: 'pokedex', DE: 'Pokédex', EN: 'Pokédex' },
    { key: 'ongoing', DE: 'Aktuelles Projekt', EN: 'Ongoing Project' },
  ];

  selectedProject = this.projects[0].key;

  onProjectSelected(key: string) {
    this.selectedProject = key;
  }
}
