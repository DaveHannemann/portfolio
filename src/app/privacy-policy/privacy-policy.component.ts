import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lang } from '../types/lang.type';
import { LangService } from '../services/lang.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-privacy-policy',
    imports: [CommonModule, RouterModule],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(public langService: LangService, private location: Location) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  goBack() {
    this.location.back();
  }
}
