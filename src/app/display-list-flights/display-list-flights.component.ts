import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

//Services
import { GetFlightInfoService } from '../services/get-flight-info.service';

@Component({
  selector: 'app-display-list-flights',
  templateUrl: './display-list-flights.component.html',
  styleUrls: ['./display-list-flights.component.scss']
})
export class DisplayListFlightsComponent implements OnInit {
  flights: any;

  constructor(private dataService: GetFlightInfoService) { }

  ngOnInit() {
    this.dataService.getInfo().subscribe((data) => {
      this.flights = data.flights;
      console.log(this.flights)
    })
  }

  sortColumn(e) {
    // this.flights = _.sortBy(this.flights, e);
  }

}
