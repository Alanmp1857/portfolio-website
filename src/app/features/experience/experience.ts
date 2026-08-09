import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [
    {
      date: 'Nov 2023 - Present',
      role: 'Associate IT Consultant',
      company: 'ITC Infotech',
      duration: '2.7 yrs',
      color: '#22d3ee',
      points: [
        'Developed and maintained scalable Angular applications.',
        'Implemented microfrontend architecture.',
        'Collaborated with cross-functional teams.'
      ]
    },
    {
      date: 'Feb 2022 - Mar 2022',
      role: 'Web Development & Designing Intern',
      company: 'The Sparks Foundation',
      duration: '1 mos',
      color: '#3b82f6',
      points: [
        'Built responsive UI using Angular.',
        'Integrated REST APIs.',
        'Wrote unit tests.'
      ]
    }
  ];
}
