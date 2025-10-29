import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Typed from 'typed.js';
import { CommonModule } from '@angular/common';
import { LangService } from '../../services/lang.service';
import { Lang } from '../../types/lang.type';
import { ScrollService } from '../../services/scroll.service';
import AOS from 'aos';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent implements AfterViewInit {
  constructor(
    public langService: LangService,
    private scrollService: ScrollService
  ) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  texts = {
    headline: { DE: 'Warum ich', EN: 'Why me' },
    passion: {
      DE: 'Ich habe meine Leidenschaft fürs Programmieren neu entdeckt, weil es eine perfekte Mischung aus analytischem Denken, Kreativität und meinem Motto "Trial and Error" bietet. <br> Jedes Projekt bringt neue Herausforderungen mit sich. <br> Sei es das eigenständige Lösen hartnäckiger Problem, das Ausprobieren und Verbessern von Ansätzen, oder die Zusammenarbeit im Team, bei der Ideen, Kritik und Feedback aufeinandertreffen. <br> Genau diese Vielfalt macht das Programmieren für mich so spannend und interessant.',
      EN: 'I rediscovered my passion for programming because it offers a perfect mix of analytical thinking, creativity, and my motto "Trial and Error". <br> Every project brings new challenges. <br> Whether it’s independently solving stubborn problems, experimenting and improving approaches, or collaborating in a team where ideas, criticism, and feedback intersect. <br> It’s exactly this variety that makes programming so exciting and engaging for me.',
    },
    button: { DE: 'Schreib mir', EN: 'Let’s talk' },
  };

  lines = [
    {
      icon: 'assets/img/located_mix.png',
      prefix: { DE: 'Ich komme ', EN: 'I am ' },
      middle: { DE: 'aus Salzgitter', EN: 'located in Salzgitter' },
      suffix: { DE: ' ...', EN: ' ...' },
    },
    {
      icon: 'assets/img/remote.png',
      prefix: { DE: 'Ich könnte ', EN: 'I am ' },
      middle: { DE: 'remote arbeiten', EN: 'open to work remote' },
      suffix: { DE: ' ...', EN: ' ...' },
    },
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
    AOS.init({
      duration: 1000,
      once: true,
    });

    this.startCycle();
  }

  startCycle() {
    const line = this.lines[this.currentIndex];
    this.showIcon = true;

    this.typePart(this.prefixEl.nativeElement, line.prefix[this.activeLang])
      .then(() =>
        this.typePart(this.middleEl.nativeElement, line.middle[this.activeLang])
      )
      .then(() =>
        this.typePart(this.suffixEl.nativeElement, line.suffix[this.activeLang])
      )
      .then(() => this.wait(this.pauseAfterTyping))
      .then(() => this.deleteCycle());
  }

  async typePart(el: HTMLElement, text: string) {
    return new Promise<void>((resolve) => {
      const oldCursors = el.parentElement?.querySelectorAll('.typed-cursor');
      oldCursors?.forEach((c) => c.remove());

      new Typed(el, {
        strings: [text],
        typeSpeed: this.typeSpeed,
        showCursor: true,
        cursorChar: '|',
        loop: false,
        onComplete: () => resolve(),
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
      const oldCursors = el.parentElement?.querySelectorAll('.typed-cursor');
      oldCursors?.forEach((c) => c.remove());

      new Typed(el, {
        strings: [''],
        typeSpeed: 0,
        backSpeed: this.backSpeed,
        showCursor: true,
        cursorChar: '|',
        loop: false,
        onComplete: () => resolve(),
      });
    });
  }

  wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
