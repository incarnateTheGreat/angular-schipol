import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-data',
  templateUrl: './flight-data.component.html',
  styleUrls: ['./flight-data.component.css']
})
export class FlightDataComponent implements OnInit {
  title: string = 'Welcome to Schipol Flight Data App.';
  airlines: string[] = ['KLM', 'WIZZ', 'Olympic', 'British Airways', 'Air Canada'];

  constructor() { }

  ngOnInit() {

  }

  getAirlines(): string[] {
    return this.airlines;
  }
}
