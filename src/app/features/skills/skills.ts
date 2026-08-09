import { Component } from '@angular/core';
import { SkillCard } from "../../shared/components/skill-card/skill-card";

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCardData1 = [
    {
      skill: "Frontend",
      icon: "calendar_today",
      technologies: [
        {
          name: "Angular",
          percentage: 90,
        },
        {
          name: "React",
          percentage: 80,
        },
        {
          name: "TypeScript",
          percentage: 90,
        },
        {
          name: "HTML",
          percentage: 95,
        },
        {
          name: "Angular Material",
          percentage: 80,
        },
        {
          name: "Tailwind CSS",
          percentage: 80,
        },
        {
          name: "SCSS",
          percentage: 80,
        }
      ]
    }
  ];

  skillCardData2 = [
    {
      skill: "Tools",
      icon: "settings",
      technologies: [
        {
          name: "Git",
          percentage: 90,
        },
        {
          name: "GitHub",
          percentage: 90,
        },
        {
          name: "Jira",
          percentage: 80,
        },
        {
          name: "GitLab",
          percentage: 80,
        },
        {
          name: "Azure DevOps",
          percentage: 80,
        },
        {
          name: "Postman",
          percentage: 80,
        },
        {
          name: "Jenkins",
          percentage: 80,
        }
      ]
    }
  ];

  skillCardData3 = [
    {
      skill: "Others",
      icon: "star_border",
      technologies: [
        {
          name: "SQL",
          percentage: 80,
        },
        {
          name: "REST API",
          percentage: 80,
        },
        {
          name: "Agile Methodology",
          percentage: 75,
        },
        {
          name: "Scrum",
          percentage: 80,
        },
        {
          name: "Team Collaboration",
          percentage: 90,
        },
        {
          name: "Problem Solving",
          percentage: 85,
        }
      ]
    }
  ]
}
