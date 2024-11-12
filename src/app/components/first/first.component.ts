import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  // state du component
  name = 'aymen';

  /**
   * Le state qui représente l'affichage ou non d'un élément
   */
  isHidden = false;
  message = "";
  constructor() {
    //   setInterval(() => {
    //     this.isHidden = ! this.isHidden
    //   }, 1500)
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
