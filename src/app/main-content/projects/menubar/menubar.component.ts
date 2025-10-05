import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
@Output() projectSelected = new EventEmitter<string>();

selectProject(name: string) {
  this.projectSelected.emit(name);
}
}
