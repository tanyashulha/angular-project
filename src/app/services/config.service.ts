import { Injectable } from '@angular/core';
import { Animals } from '../interfaces/animals';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private service: ApiService) { }

  url = `/animals`;

  getData(): Observable<Animals> {
    return this.service.get<Animals>(this.url);
  }
}
