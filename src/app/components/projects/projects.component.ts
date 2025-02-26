import { Component } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectsList: Project[] = [
    {
      title: 'Adopet API',
      description:
        'This API is designed to manage an animal adoption system, allowing users to navigate, register, and adopt available animals. It also allows administrators to manage the animal catalog and follow the adoption process.',
      link: 'https://github.com/Vitor-C-Souza/adopet-api',
      tecnologies: ['Java', 'Spring', 'MySQL', 'Rest API'],
    },
    {
      title: 'Catalogos de Livros',
      description:
        'A Graphql API to manage a book catalog, developed with Spring Boot, Mongodb and Graphql.',
      link: 'https://github.com/Vitor-C-Souza/catalagos-de-livros',
      tecnologies: ['Java', 'Spring`Boot', 'MongoDB', 'GraphQL'],
    },
  ];
}
