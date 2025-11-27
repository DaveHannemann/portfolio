import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LangService } from '../../../services/lang.service';
import { Lang } from '../../../types/lang.type';

type ProjectName = { key: string; DE: string; EN: string };

@Component({
    selector: 'app-menubar',
    imports: [CommonModule],
    templateUrl: './menubar.component.html',
    styleUrl: './menubar.component.scss'
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
  @Input() projects!: { key: string; DE: string; EN: string }[];

  selectProject(key: string) {
    this.projectSelected.emit(key);
  }

  projectRows: ProjectName[][] = [];

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
