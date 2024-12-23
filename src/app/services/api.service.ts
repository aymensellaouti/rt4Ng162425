import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { APP_API } from "../config/app-api.config";
import { APP_CONSTANTES } from "../config/app-const.config";

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
}

@Injectable({providedIn: 'root'})
export class ApiService {
  http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    // return of("Hello")
    return this.http.get<{data:User[]}>(APP_API.users).pipe(
      map(response => response.data)
    );
  }
  addUser(user: Partial<User>): Observable<User> {
    // n7ather el header API Key
      return this.http
      .post<{ data: User }>(APP_API.users, user)
      .pipe(map((response) => response.data));
  }
}
