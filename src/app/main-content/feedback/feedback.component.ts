import { Component } from '@angular/core';
import { BubbleComponent } from "./bubble/bubble.component";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [BubbleComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

}
