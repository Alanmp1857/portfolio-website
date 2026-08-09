import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./layout/navbar/navbar";
import { Home } from "./features/home/home";
import { About } from "./features/about/about";
import { Footer } from "./layout/footer/footer";
import { Skills } from "./features/skills/skills";
import { Experience } from "./features/experience/experience";
import { Projects } from "./features/projects/projects";
import { Certifications } from "./features/certifications/certifications";
import { Contact } from "./features/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, About, Footer, Skills, Experience, Projects, Certifications, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-website');
}
