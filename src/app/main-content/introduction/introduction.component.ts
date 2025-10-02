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
    text: 'I am located in Salzgitter ...' 
  },
  { 
    icon: 'assets/img/remote.png', 
    text: 'I am open to work remote ...' 
  }
];

  currentIndex = 0;
  showIcon = true;

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  typed?: Typed;

  typeSpeed = 50;
  backSpeed = 40;
  pauseAfterTyping = 1500;
  pauseBeforeNext = 300;
  iconFadeDuration = 300;

  ngAfterViewInit() {
    this.startCycle();
  }

  startCycle() {
    if (this.typed) {
      this.typed.destroy();
      this.typedElement.nativeElement.innerHTML = '';
    }

    const currentText = this.lines[this.currentIndex].text;
    this.showIcon = true;

    this.typed = new Typed(this.typedElement.nativeElement, {
      strings: [currentText],
      typeSpeed: this.typeSpeed,
      showCursor: true,
      cursorChar: '|',
      loop: false,
      smartBackspace: false,
      onComplete: () => {
        setTimeout(() => this.startDeletingManual(currentText), this.pauseAfterTyping);
      }
    });
  }

  startDeletingManual(text: string) {
    if (this.typed) {
      this.typed.destroy();
      this.typedElement.nativeElement.innerHTML = text;
    }

    const el = this.typedElement.nativeElement;
    let current = text;

    const interval = setInterval(() => {
      if (current.length > 0) {
        current = current.slice(0, -1);
        el.textContent = current;
      } else {
        clearInterval(interval);
        this.showIcon = false;

        setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this.lines.length;
          this.startCycle();
        }, this.pauseBeforeNext);
      }
    }, this.backSpeed);
  }
}
