import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import _ from 'lodash';

//Services
import { GetFlightInfoService } from '../services/get-flight-info.service';

@Component({
  selector: 'app-display-list-flights',
  templateUrl: './display-list-flights.component.html',
  styleUrls: ['./display-list-flights.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // this hides everything right away
        query(':enter', style({ opacity: 0 })),

        // starts to animate things with a stagger in between
        query(':enter', stagger('50ms', [
          animate('500ms', style({ opacity: 1 }))
        ]))
      ])
    ])
  ]
})
export class DisplayListFlightsComponent implements OnInit {
  flights: any[] = [];
  sortDirection: string = 'ASC';

  constructor(private dataService: GetFlightInfoService) { }

  ngOnInit() {
    this.dataService.getInfo().subscribe((data) => {
      this.flights = data.flights;
      if(!_.isNull(this.flights)) {
        console.log(this.flights);
      }
    },
    error => console.log(error))
  }

  sortColumn(column, e) {
    const allSpanElems = document.getElementsByTagName('table')[0].getElementsByTagName('span'),
          arrowElem = e.srcElement.getElementsByTagName('span')[0];

    _.forEach(allSpanElems, (spanElem) => {
      spanElem.innerHTML = '';
    });

    if(this.sortDirection === 'ASC') {
      this.flights = _.sortBy(this.flights, column).reverse();
      this.sortDirection = 'DESC';
      arrowElem.innerHTML = '&#9660;';
    } else {
      this.flights = _.sortBy(this.flights, column);
      this.sortDirection = 'ASC';
      arrowElem.innerHTML = '&#9650;';
    }
  }

  showFlightInfo(flightInfo) {
    console.log(flightInfo)
  }

}
