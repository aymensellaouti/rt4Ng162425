import { Component, inject } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  on = true;
  today = new Date();
  logger = inject(LoggerService);
  // constructor(public logger: LoggerService) {}
  interrupteur() {
    this.on = ! this.on;
  }
}
