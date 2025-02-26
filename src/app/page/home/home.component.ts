import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { AboutmeComponent } from '../../components/aboutme/aboutme.component';
import { MeComponent } from '../../components/me/me.component';
import { ExperienceComponent } from '../../components/experience/experience.component';

@Component({
  selector: 'app-home',
  imports: [
    ContainerComponent,
    AboutmeComponent,
    MeComponent,
    ExperienceComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
