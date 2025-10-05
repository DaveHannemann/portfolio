import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss',
})
export class SkillsetComponent implements OnInit {
  skills = [
    'assets/img/angular.png',
    'assets/img/typescript.png',
    'assets/img/javascript.png',
    'assets/img/html.png',
    'assets/img/css.png',
    'assets/img/rest_api.png',
    'assets/img/firebase.png',
    'assets/img/git.png',
    'assets/img/material_design.png',
    'assets/img/scrum.png',
  ];

  learningSkills = [
    { src: 'assets/img/angular_learn.png', label: 'Angular' },
    { src: 'assets/img/typescript_learn.png', label: 'TypeScript' },
    { src: 'assets/img/javascript_learn.png', label: 'JavaScript' },
    { src: 'assets/img/html_learn.png', label: 'HTML' },
    { src: 'assets/img/css_learn.png', label: 'CSS' },
    { src: 'assets/img/firebase_learn.png', label: 'Firebase' },
  ];

  learningHover = false;

  skillColumns: string[][] = [];

  ngOnInit() {
    const size = 4;
    for (let i = 0; i < this.skills.length; i += size) {
      this.skillColumns.push(this.skills.slice(i, i + size));
    }
  }
}
