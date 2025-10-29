import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { Lang } from '../../types/lang.type';
import { ScrollService } from '../../services/scroll.service';
import AOS from 'aos';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss',
})
export class SkillsetComponent implements OnInit {
  constructor(
    public langService: LangService,
    private scrollService: ScrollService
  ) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  texts = {
    headline: { DE: 'Meine Fähigkeiten', EN: 'My Skills' },
    learning: {
      DE: 'Ich lerne gerade',
      EN: 'I am currently learning',
    },
    mobile: {
      DE: 'Was ich gerade lerne',
      EN: 'What I am currently learning',
    },
    button: { DE: 'Schreib mir', EN: 'Let’s talk' },
  };

  skills = [
    { src: 'assets/img/angular_mobile.png', label: 'Angular' },
    { src: 'assets/img/typescript_mobile.png', label: 'TypeScript' },
    { src: 'assets/img/javascript_mobile.png', label: 'JavaScript' },
    { src: 'assets/img/html_mobile.png', label: 'HTML' },
    { src: 'assets/img/css_mobile.png', label: 'CSS' },
    { src: 'assets/img/api_mobile.png', label: 'API' },
    { src: 'assets/img/firebase_mobile.png', label: 'Firebase' },
    { src: 'assets/img/git_mobile.png', label: 'Git' },
    { src: 'assets/img/material_design_mobile.png', label: 'Material Design' },
    { src: 'assets/img/scrum_mobile.png', label: 'Scrum' },
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

  skillColumns: { src: string; label: string }[][] = [];
  skillLines: { src: string; label: string }[][] = [];

  ngOnInit() {
    const size = 4;
    for (let i = 0; i < this.skills.length; i += size) {
      this.skillColumns.push(this.skills.slice(i, i + size));
      this.skillLines.push(this.skills.slice(i, i + size));
    }
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }

  ngAfterViewInit() {
    AOS.refresh();
  }
}
