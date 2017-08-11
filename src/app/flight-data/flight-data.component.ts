import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

//Services
import { GetFlightInfoService } from '../services/get-flight-info.service';

@Component({
  selector: 'app-flight-data',
  templateUrl: './flight-data.component.html',
  styleUrls: ['./flight-data.component.css']
})
export class FlightDataComponent implements OnInit {
  title: string = 'Welcome to Schipol Flight Data App.';
  homeIataCode: string = 'AMS';
  flights: any;
  flightNumberInput: string;
  flightNumberData: Object;

  constructor(private dataService:GetFlightInfoService) {
    this.flightNumberData = {
      'flightIdent': '',
      'flightDirection': '',
      'terminal': '',
      'gate': '',
      'date': '',
      'time': '',
      'serviceType': '',
      'aircraftType': '',
      'aircraftRegistration': '',
      'route': null
    };
  }

  ngOnInit() {
    this.dataService.getInfo().subscribe((data) => {
      this.flights = data.flights;
    })
  }

  searchFlight() {
    const self = this;

    console.log('Searching...', this.flightNumberInput);

    const flightInfo = _.find(this.flights, function(flight) {
      return flight.flightName == self.flightNumberInput.toUpperCase().replace(/ /g, '');
    });

    this.flightNumberData = {
      'flightIdent': flightInfo.flightName,
      'flightDirection': (flightInfo.flightDirection === 'D' ? 'Departure' : 'Arrival'),
      'terminal': flightInfo.terminal,
      'gate': flightInfo.gate,
      'date': flightInfo.scheduleDate,
      'time': flightInfo.scheduleTime,
      'serviceType': flightInfo.serviceType,
      'aircraftType': flightInfo.aircraftType.iatamain,
      'aircraftRegistration': flightInfo.aircraftRegistration,
      'route': this.createRoute(flightInfo)
    }

    console.log(this.flightNumberData);
  }

  createRoute(flightInfo) {
    let route = '';

    if(flightInfo.flightDirection === 'D') {
      route = this.homeIataCode + ' &rarr; ' + flightInfo.route.destinations[0];
    } else {
      route = flightInfo.route.destinations[0] + ' &rarr; ' + this.homeIataCode;
    }

    return route;
  }
}

interface flightDisplay {
  flightNumber: string,
  flightDirection: string,
  gate: string,
  terminal: number,
  time: any
}
