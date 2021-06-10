import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAnimals } from '../interfaces/animals';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = `https://complete-geode-fahrenheit.glitch.me/animals`;

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<IAnimals> {
    return this.http.get<IAnimals>(`${this.url}`)
  }
}
