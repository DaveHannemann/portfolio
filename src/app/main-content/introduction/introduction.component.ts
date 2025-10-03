import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Typed from 'typed.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent implements AfterViewInit {
  lines = [
    { 
      icon: 'assets/img/located_mix.png', 
      prefix: 'I am ', 
      middle: 'located in Salzgitter', 
      suffix: ' ...'
    },
    { 
      icon: 'assets/img/remote.png', 
      prefix: 'I am ', 
      middle: 'open to work remote', 
      suffix: ' ...'
    }
  ];

  currentIndex = 0;
  showIcon = true;

  @ViewChild('prefixEl', { static: true }) prefixEl!: ElementRef;
  @ViewChild('middleEl', { static: true }) middleEl!: ElementRef;
  @ViewChild('suffixEl', { static: true }) suffixEl!: ElementRef;

  typeSpeed = 50;
  backSpeed = 40;
  pauseAfterTyping = 1000;
  pauseBeforeNext = 300;

  ngAfterViewInit() {
    this.startCycle();
  }

  startCycle() {
    const line = this.lines[this.currentIndex];
    this.showIcon = true;

    this.typePart(this.prefixEl.nativeElement, line.prefix)
      .then(() => this.typePart(this.middleEl.nativeElement, line.middle))
      .then(() => this.typePart(this.suffixEl.nativeElement, line.suffix))
      .then(() => this.wait(this.pauseAfterTyping))
      .then(() => this.deleteCycle());
  }

async typePart(el: HTMLElement, text: string) {
  return new Promise<void>((resolve) => {

    // Vorherige Cursor-Spans entfernen
    const oldCursors = el.parentElement?.querySelectorAll('.typed-cursor');
    oldCursors?.forEach(c => c.remove());

    new Typed(el, {
      strings: [text],
      typeSpeed: this.typeSpeed,
      showCursor: true, // behalten
      cursorChar: '|',
      loop: false,
      onComplete: () => resolve()
    });
  });
}

  async deleteCycle() {
    await this.deletePart(this.suffixEl.nativeElement);
    await this.deletePart(this.middleEl.nativeElement);
    await this.deletePart(this.prefixEl.nativeElement);

    this.showIcon = false;
    await this.wait(this.pauseBeforeNext);

    this.currentIndex = (this.currentIndex + 1) % this.lines.length;
    this.startCycle();
  }

async deletePart(el: HTMLElement) {
  return new Promise<void>((resolve) => {

    // Vorherige Cursor-Spans entfernen
    const oldCursors = el.parentElement?.querySelectorAll('.typed-cursor');
    oldCursors?.forEach(c => c.remove());

    new Typed(el, {
      strings: [''],
      typeSpeed: 0,
      backSpeed: this.backSpeed,
      showCursor: true,
      cursorChar: '|',
      loop: false,
      onComplete: () => resolve()
    });
  });
}

  wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
