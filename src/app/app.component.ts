import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        FooterComponent,
        HeaderComponent,
        LandingPageComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('headerTrigger') headerTrigger!: ElementRef;

  headerFixed = false;
  isMainPage = false;
  title = 'portfolio';

  private observer?: IntersectionObserver;
  private resizeListener = () => this.setupHeaderBehavior();

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.router.events.subscribe(() => {
      this.isMainPage = this.router.url === '/';
      this.cdr.detectChanges();
    });
  }

ngAfterViewInit() {
  this.setupHeaderBehavior();

  fromEvent(window, 'resize')
    .pipe(debounceTime(150))
    .subscribe(() => this.setupHeaderBehavior());
}

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('resize', this.resizeListener);
  }

  private setupHeaderBehavior() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    if (window.innerWidth >= 768) {
      this.observer = new IntersectionObserver(([entry]) => {
        this.headerFixed = !entry.isIntersecting;
        this.cdr.detectChanges();
      }, { threshold: 0 });

      if (this.headerTrigger?.nativeElement) {
        this.observer.observe(this.headerTrigger.nativeElement);
      }
    } else {
      this.headerFixed = true;
      this.cdr.detectChanges();
    }
  }
}