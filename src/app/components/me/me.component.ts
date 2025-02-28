import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-me',
  imports: [CommonModule, RouterModule],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss',
})
export class MeComponent {
  techSections = [
    {
      title: 'Frontend',
      items: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Angular',
        'NodeJS',
      ],
      open: false,
    },
    {
      title: 'Backend',
      items: [
        'Java',
        'Spring Boot',
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Rest API',
        'GraphQL',
      ],
      open: false,
    },
    {
      title: 'DevOps and Cloud',
      items: [
        'Docker',
        'Nginx',
        'Prometheus',
        'Grafana',
        'RabbitMQ',
        'Apache Kafka',
        'AWS',
      ],
      open: false,
    },
  ];

  toggleSection(section: any) {
    section.open = !section.open;
  }
}
