import { Component } from '@angular/core';
import { ProjectCard } from "../../shared/components/project-card/project-card";

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  categories = [
    { name: 'All', selected: true },
    { name: 'Angular', selected: false },
    { name: 'React', selected: false },
    { name: 'Other', selected: false },
  ];

  projectData = [
    {
      name: 'Pokemon Battle Showdown Simulator',
      description: 'A web application for simulating Pokemon battles.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/Alanmp1857/pokemon-battle-simulator-v1',
      image: '/assets/pokemon-img.jpg',
    },
    {
      name: 'SnapCart',
      description: 'An e-commerce platform for shopping.',
      technologies: ['React', 'TypeScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/Alanmp1857/SnapCart',
      image: 'assets/e-commerce.jpg',
    },
    {
      name: 'Portfolio Website',
      description: 'A responsive portfolio website built with Angular.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/Alanmp1857/portfolio-website',
      image: 'assets/portfolio.jpg',
    }
  ];

  filteredProjects = this.projectData;
  selectedCategory = this.categories[0];

  selectCategory(category: any) {
    this.selectedCategory = category;
    this.categories.forEach((cat) => {
      cat.selected = cat === category;
    });
  }
}
