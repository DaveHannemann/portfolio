import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Lang } from '../../../types/lang.type';
import { LangService } from '../../../services/lang.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  constructor(public langService: LangService) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  showFeedback = false;
  feedbackMessage = '';
  feedbackType: 'success' | 'error' = 'success';

  texts = {
    name: {
      DE: 'Dein Name',
      EN: 'Your name',
    },
    nameError: {
      DE: 'Dein Name wird benötigt',
      EN: 'Your name is required',
    },
    mail: {
      DE: 'Deine E-Mail',
      EN: 'Your Email',
    },
    mailError: {
      DE: 'Deine E-Mail wird benötigt',
      EN: 'Your Email is required',
    },
    message: {
      DE: 'Deine Nachricht',
      EN: 'Your Message',
    },
    messageError: {
      DE: 'Deine Nachricht wird benötigt',
      EN: 'Your Message is required',
    },
    policyPre: {
      DE: 'Ich habe den',
      EN: 'I’ve read the',
    },
    policy: {
      DE: 'Datenschutz',
      EN: 'privacy policy',
    },
    policySuf: {
      DE: 'gelesen und bin mit der beschriebenen Verarbeitung meiner Daten einverstanden.',
      EN: 'and agree to the processing of my data as outlined.',
    },
    policyError: {
      DE: 'Bitte akzeptieren Sie den Datenschutz.',
      EN: 'Please accept the privacy policy.',
    },
  };

  feedbackTexts = {
    success: {
      DE: 'Vielen Dank, ich melde mich so schnell wie möglich!',
      EN: 'Thank you, I’ll answer as soon as possible!',
    },
    error: {
      DE: 'Fehler beim Senden. Bitte versuche es später erneut.',
      EN: 'Error sending message. Please try again later.',
    },
  };

  isMobile = window.innerWidth <= 768;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  http = inject(HttpClient);

  policyHover = false;
  policyClicked = false;
  policyTouched = false;
  formSubmitted = false;
  mailTest = true;

  formData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.showFeedbackMessage('success');
          },
          error: (error) => {
            console.error(error);
            this.showFeedbackMessage('error');
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.showFeedbackMessage('success');
    }
  }

  togglePolicy() {
    this.policyClicked = !this.policyClicked;
    this.policyTouched = true;
  }

  private showFeedbackMessage(type: 'success' | 'error') {
    this.feedbackMessage = this.feedbackTexts[type][this.activeLang];
    this.feedbackType = type;
    this.showFeedback = true;

    setTimeout(() => {
      this.showFeedback = false;
    }, 2500);
  }
}
