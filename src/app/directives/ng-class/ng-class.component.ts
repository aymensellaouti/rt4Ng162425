import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  activatedRoute = inject(ActivatedRoute);
  on = true;
  today = new Date();
  logger = inject(LoggerService);
  constructor() {
    this.on = this.activatedRoute.snapshot.params['isOpen'] == 'true';
  }
  // constructor(public logger: LoggerService) {}
  interrupteur() {
    this.on = ! this.on;
  }
}
