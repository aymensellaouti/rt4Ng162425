import { Component, inject } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {
  countDown$: Observable<number>;
  count: number | string = "count down will start immediately";
  apiService = inject(ApiService);
  first$ = this.apiService.getUsers();
  constructor() {
     this.countDown$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.countDown$
    .pipe(
      // 5 4 3 2 1
      map(dataJdida => dataJdida * 3),
      // 15 12 9 6 3
      filter( data => data % 2 === 0 )
      // 12 6
    )
    .subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    setTimeout(() => {
    this.countDown$.subscribe({
      next: (val) => {
        this.count = val;
      },
      complete: () => {
        this.count = 'BOOOOM';
      },
    });
    },3000)
  }
}
