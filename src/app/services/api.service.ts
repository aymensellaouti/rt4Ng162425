import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";


@Injectable({providedIn: 'root'})
export class ApiService {
  http = inject(HttpClient);

  getTodos(): Observable<any> {
    // return of("Hello")
    return this.http.get('http://localhost:3000/first');
  }
}
