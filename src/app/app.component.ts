import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';
import { Router } from '@angular/router';

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
export class AppComponent {
  @ViewChild('headerTrigger') headerTrigger!: ElementRef;

  headerFixed = false;
  isMainPage = false;

  title = 'portfolio';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isMainPage = this.router.url === '/';
    });
  }

ngAfterViewInit() {
  if (window.innerWidth >= 768) {
    const observer = new IntersectionObserver(([entry]) => {
      this.headerFixed = !entry.isIntersecting;
    }, { threshold: 0 });

    observer.observe(this.headerTrigger.nativeElement);
  } else {
    this.headerFixed = true;
  }
}
}
