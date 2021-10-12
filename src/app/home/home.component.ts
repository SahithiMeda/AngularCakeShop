import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
countries: any=[
  {
    name: "Italy",
    content: "This is about Italy"
  },
  {
    name: "Italy",
    content: "This is about Italy"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
