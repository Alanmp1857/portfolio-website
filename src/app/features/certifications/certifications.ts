import { Component } from '@angular/core';
import { CertificateCard } from "../../shared/components/certificate-card/certificate-card";

@Component({
  selector: 'app-certifications',
  imports: [CertificateCard],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  certificateData = [
    {
      title: 'Namaste DSA',
      imageUrl: '/assets/dsa.jpg',
      issuer: 'Namaste Dev',
      date: 'June 2026',
      goToCertifcate: 'https://namastedev.com/alanmathew1857/certificates/namaste-dsa'
    },
    {
      title: 'Namaste React',
      imageUrl: '/assets/react.jpg',
      issuer: 'Namaste Dev',
      date: 'Sep 2023',
      goToCertifcate: 'https://namastedev.com/alanmathew1857/certificates/namaste-react'
    },
    {
      title: 'The Complete JavaScript Course 2022: From Zero to Expert!',
      imageUrl: '/assets/javascript.jpg',
      issuer: 'Udemy',
      date: 'Nov 2021',
      goToCertifcate: 'https://www.udemy.com/certificate/UC-13cecedd-4ccf-4659-9340-6b43e289b7a4/'
    }
  ]
}
