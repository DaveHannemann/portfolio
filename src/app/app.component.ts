import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('headerTrigger') headerTrigger!: ElementRef;

  headerFixed = false;
  isMainPage = false;
  title = 'portfolio';

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.router.events.subscribe(() => {
      this.isMainPage = this.router.url === '/';
      this.cdr.detectChanges();
    });
  }

  ngAfterViewInit() {
    if (window.innerWidth >= 768) {
      const observer = new IntersectionObserver(([entry]) => {
        this.headerFixed = !entry.isIntersecting;
        this.cdr.detectChanges();
      }, { threshold: 0 });

      observer.observe(this.headerTrigger.nativeElement);
    } else {
      this.headerFixed = true;
      this.cdr.detectChanges();
    }
  }
}