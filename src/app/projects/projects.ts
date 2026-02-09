

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import projectsData from './projects-data.json';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: any[] = projectsData;
}
