import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
@Output() projectSelected = new EventEmitter<string>();
@Input() activeProject!: string;

projects = ['DA Bubble', 'Sharkie', 'Join', 'Pokédex', 'Ongoing Project'];

selectProject(name: string) {
  this.projectSelected.emit(name);
}
}
