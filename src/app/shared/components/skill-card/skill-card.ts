import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-skill-card',
  imports: [MatProgressBarModule, MatIcon],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
  @Input() cardData: any;
  
}
