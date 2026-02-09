// ...existing code...
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('super-awesome-page-V2');

  menuOpen = signal(false);

  constructor() {
    document.addEventListener('click', (event) => {
      if(this.menuOpen() === true && !(event.target as HTMLElement).closest('.app-nav, .nav-toggle')) {
        this.menuOpen.set(false);
      }
    });
  }

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

}
