import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listOfAnimals: any[] = [
    {
      name: "Leopard",
      wild: true
    },
    {
      name: "Shark",
      wild: true
    },
    {
      name: "Wolf",
      wild: true
    },
    {
      name: "Panda",
      wild: true
    },
    {
      name: "Cat",
      wild: false
    },
    {
      name: "Dog",
      wild: false
    },
    {
      name: "Pig",
      wild: false
    },
    {
      name: "Sheep",
      wild: false
    },
    {
      name: "Guinea pig",
      wild: false
    }
  ]

}
