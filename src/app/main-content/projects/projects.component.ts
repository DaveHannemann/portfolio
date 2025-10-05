import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { OrganiseComponent } from './organise/organise.component';
import { ExperienceComponent } from './experience/experience.component';
import { DisplayComponent } from './display/display.component';
import { MenubarComponent } from './menubar/menubar.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AboutComponent, OrganiseComponent, ExperienceComponent, DisplayComponent, MenubarComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
selectedProject: string = '';
onProjectSelected(name: string) {
  this.selectedProject = name;
}
}
