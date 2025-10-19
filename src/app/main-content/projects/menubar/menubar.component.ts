import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LangService } from '../../../services/lang.service';
import { Lang } from '../../../types/lang.type';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent {

    constructor(public langService: LangService) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  texts = {
    mobile: { DE: 'Projekt', EN: 'Project' },
  };
  @Output() projectSelected = new EventEmitter<string>();
  @Input() activeProject!: string;

  projects = ['DA Bubble', 'Sharkie', 'Join', 'Pokédex', 'Ongoing Project'];

  selectProject(name: string) {
    this.projectSelected.emit(name);
  }

projectRows: string[][] = [];

ngOnInit() {
  this.splitProjects();
}

splitProjects() {
  this.projectRows = [];
  for (let i = 0; i < this.projects.length; i += 4) {
    this.projectRows.push(this.projects.slice(i, i + 4));
  }
}
}
