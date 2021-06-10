import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { IAnimals } from '../../../interfaces/animals';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  animals: Observable<IAnimals>;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.animals = this.apiService.getAnimals();
  }
}
