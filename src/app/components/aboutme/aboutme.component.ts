import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  imports: [CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  isOpen = false;

  toggleReadMore() {
    this.isOpen = !this.isOpen;
  }
}
