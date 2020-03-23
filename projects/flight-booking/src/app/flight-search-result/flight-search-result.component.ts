import { Component, OnInit } from '@angular/core';
import { MockDataService, LocalstorageService } from "@shared/services";
import { FlightAC, Flights } from '@shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search-result',
  templateUrl: './flight-search-result.component.html',
  styleUrls: ['./flight-search-result.component.scss']
})
export class FlightSearchResultComponent implements OnInit {

  searchResult: Flights[];

  flightAC: any;
  newflightAC:FlightAC[];

  constructor(
   private dataService: MockDataService,
   private localstorageService: LocalstorageService,
   private router: Router
  ) { }

  ngOnInit(): void {
    this.flightAC = this.localstorageService.get('flightData')
    // this.dataService.castflightAC.subscribe(flightAC => this.flightAC = flightAC);
    // console.log('wwww',this.flightAC)
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
  
  gotoFlightSearch() {
    this.router.navigate([`/landing`]);
  }
}
