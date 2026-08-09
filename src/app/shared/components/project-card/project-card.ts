import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() cardData: any;

  goToGithubPage() {
    if (this.cardData?.githubLink) {
      window.open(this.cardData.githubLink, '_blank');
    }
  }
}
