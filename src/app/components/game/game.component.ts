import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Input()
  magicNumber = 5;
  message = 'Start the game by introducing the magic number';
  try = 0;
  canPlay = true;
  router = inject(Router);
  play() {
    if (this.try == this.magicNumber) {
      // Navigation
      alert('You win ');
      this.router.navigate([APP_ROUTES.two]);
    } else {
      this.canPlay = false;
      this.message = 'You loose the game';
    }
  }
  playAgain() {
    this.canPlay = true;
  }
}
