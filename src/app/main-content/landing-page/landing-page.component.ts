import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { UiService } from '../../services/user-interface.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  portraitHover = false;
  logoHover = false;
  socialHover = false;


  constructor(private scrollService: ScrollService, private ui: UiService) {}



  scrollTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }


}
