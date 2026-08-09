import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-certificate-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './certificate-card.html',
  styleUrl: './certificate-card.css',
})
export class CertificateCard {
  @Input() cardData: any;
}
