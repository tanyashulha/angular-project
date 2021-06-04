import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ConfigService } from '../../../services/config.service';
import { Animals } from '../../../interfaces/animals';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  sub$ = new Subscription();
  data: Animals;
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.sub$.add(
      this.configService.getData()
      .subscribe((data) => {
        console.log(data)
      })
    )
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
