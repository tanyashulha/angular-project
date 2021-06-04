import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IResponse<T> {
  body: T;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url = `https://complete-geode-fahrenheit.glitch.me`;

  get<T>(path: string, key: string = 'body'): Observable<T> {
    const url = `${this.url}/${path}`;

    return this.http.get<IResponse<T>>(url).pipe(
      map(res => res[key]),
    );
  }
}
