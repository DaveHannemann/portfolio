import { Component } from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { SkillsetComponent } from "./skillset/skillset.component";
import { ProjectsComponent } from "./projects/projects.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [IntroductionComponent, SkillsetComponent, ProjectsComponent, FeedbackComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
