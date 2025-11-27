import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lang } from '../../../types/lang.type';
import { LangService } from '../../../services/lang.service';
import { link } from 'fs';

@Component({
    selector: 'app-footer',
    imports: [CommonModule, RouterModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public langService: LangService) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  texts = {
    legal: {
      DE: 'Rechtlicher Hinweis',
      EN: 'Legal Notice',
    },
  };

  socialIcons = [
    {
      img1: 'assets/img/git_mobile_footer.png',
      img2: 'assets/img/git_mobile_footer_active.png',
      img3: 'assets/img/git_mobile_footer_after.png',
      current: 'assets/img/git_mobile_footer.png',
      state: 'default',
      link: 'https://github.com/DaveHannemann'
    },
    {
      img1: 'assets/img/mail_mobile_footer.png',
      img2: 'assets/img/mail_mobile_footer_active.png',
      img3: 'assets/img/mail_mobile_footer_after.png',
      current: 'assets/img/mail_mobile_footer.png',
      state: 'default',
      link: 'mailto:davidhannemanndev@gmail.com'
    },
    {
      img1: 'assets/img/linked_mobile_footer.png',
      img2: 'assets/img/linked_mobile_footer_active.png',
      img3: 'assets/img/linked_mobile_footer_after.png',
      current: 'assets/img/linked_mobile_footer.png',
      state: 'default',
      link: 'https://www.linkedin.com/in/david-hannemann-8698b636a/'
    },
  ];

  activateIcon(icon: any) {
    if (icon.state === 'default') {
      icon.current = icon.img2;
      icon.state = 'clicked';
      setTimeout(() => {
        icon.current = icon.img3;
        icon.state = 'active';
      }, 200);
    }
  }

  onHover(icon: any) {
    if (icon.state === 'active') icon.current = icon.img2;
  }

  onLeave(icon: any) {
    if (icon.state === 'active') icon.current = icon.img3;
  }
}
