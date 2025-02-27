import { Component } from '@angular/core';
import { Project } from '../../interfaces/project';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CardComponent, CommonModule],
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
      tecnologies: ['Java', 'Spring Boot', 'MongoDB', 'GraphQL'],
    },
    {
      title: 'blogpessoal API',
      description:
        'This API is designed to manage a personal blog, allowing the author to create, edit and publish posts, while readers can navigate the content, comment and interact.',
      link: 'https://github.com/Vitor-C-Souza/blogpessoal',
      tecnologies: ['Java', 'Spring Boot', 'MySQL', 'Rest API'],
    },
    {
      title: 'bytebank API',
      description: 'Project for Bytebank, data processor of a file.csv',
      link: 'https://github.com/Vitor-C-Souza/bytebank',
      tecnologies: ['Java', 'Spring Boot', 'MySQL', 'Spring Batch'],
    },
    {
      title: 'Star Wars API',
      description:
        'Creation, management and visualization of a Star Wars -inspired galaxy, including planets, star systems, characters and spaceships.',
      link: 'https://github.com/Vitor-C-Souza/star-wars-api',
      tecnologies: ['Java', 'Spring Boot', 'MySQL', 'Rest API'],
    },
    {
      title: 'Jornada Milhas API',
      description: 'API to return testimonials and travel destinations.',
      link: 'https://github.com/Vitor-C-Souza/jornada-milhas-api',
      tecnologies: ['Java', 'Spring Boot', 'MySQL', 'Rest API'],
    },
    {
      title: 'Banco Digital',
      description:
        'This API is designed to manage the features of a digital bank, allowing users to create accounts, perform transactions, track balances, manage cards and control their finances in a practical and safe way.',
      link: 'https://github.com/Vitor-C-Souza/banco-digital',
      tecnologies: ['Java', 'Spring Boot', 'MySQL', 'Rest API'],
    },
    {
      title: 'Controle de orcamento familiar API',
      description:
        'Family budget control is an application that aims to provide a simple, efficient and intuitive way for families to manage their finances. This platform allows users to monitor their revenues, expenses and economies, helping to plan the financial future and achieve savings goals in an organized and automated manner.',
      link: 'https://github.com/Vitor-C-Souza/controle-de-orcamento-familiar-api',
      tecnologies: ['Java', 'Spring Boot', 'MySQL', 'RestAPI'],
    },
    {
      title: 'Aluraflix API',
      description:
        'Challenge proposed for Alura to Backend to create an API for Aluraflix website',
      link: 'https://github.com/Vitor-C-Souza/aluraflix-api',
      tecnologies: ['Java', 'Spring Boot', 'MySQL', 'Rest API'],
    },
  ];
}
