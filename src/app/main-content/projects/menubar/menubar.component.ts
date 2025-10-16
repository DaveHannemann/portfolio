import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent {
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
