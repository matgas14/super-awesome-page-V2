import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal';

@Component({
  selector: 'app-schenanigans',
  templateUrl: './schenanigans.html',
  styleUrl: './schenanigans.scss',
  imports: [CommonModule, ModalComponent],
})
export class Schenanigans {
  loading = signal(false);
  counter = signal(0);
  showModal = signal(false);

  get timeWastedText(): string {
    return `Time wasted approx.: ${this.counter() * 2} seconds`;
  }

  doSomething() {
    this.loading.set(true);
    const increment = (() => {
      let localCount = this.counter();
      return () => {
        localCount++;
        this.counter.set(localCount);
        this.loading.set(false);
        console.log('Done something! ', localCount);
      };
    })();

    setTimeout(increment, 2000);
  }

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }
}
