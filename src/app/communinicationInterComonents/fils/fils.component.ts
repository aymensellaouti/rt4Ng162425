import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
// filsComponent(messageDePapa){}
export class FilsComponent {
  @Input({
    // required: true,
    // alias: 'message',
    // transform: (data: string) => {
    //   return data;
    // }
  })
  messageDePapa = 'salam';

  @Output() sendMessageElBaba = new EventEmitter<string>();

  onSendMessageToBaba() {
    this.sendMessageElBaba.emit('salam Baba :)');
  }
}
