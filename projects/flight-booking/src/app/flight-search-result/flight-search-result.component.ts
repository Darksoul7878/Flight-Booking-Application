import { Component, OnInit } from '@angular/core';
import { MockDataService } from "@shared/services";
import { FlightAC, Flights } from '@shared/models';

@Component({
  selector: 'app-flight-search-result',
  templateUrl: './flight-search-result.component.html',
  styleUrls: ['./flight-search-result.component.scss']
})
export class FlightSearchResultComponent implements OnInit {

  searchResult: Flights[];

  flightAC: FlightAC[];
  newflightAC:FlightAC[];

  constructor(
   private dataService: MockDataService
  ) { }

  ngOnInit(): void {
    this.dataService.castflightAC.subscribe(flightAC => this.flightAC = flightAC);
    this.createSearchResult();
  }

  createSearchResult() {
    let flightData = this.dataService.getFlightData();
    this.searchResult = [];
    flightData.forEach(element => {
      if (element.origin === this.flightAC['departureCity'] && element.destination === this.flightAC['destinationCity']) {
        this.searchResult.push(element);
      }
    });
  }
}
