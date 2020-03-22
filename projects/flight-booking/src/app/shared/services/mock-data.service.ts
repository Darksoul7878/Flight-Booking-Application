import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State, Flights, FlightAC } from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  private flightAC = new BehaviorSubject<FlightAC[]>([]);
   castflightAC = this.flightAC.asObservable();
   
   ediFlightAC(newflightAC){
     this.flightAC.next(newflightAC); 
   }

  getCitydata() {
    let states: State[];
    states = [
      {
        name: 'mumbai',
        population: '2.978M',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
      },
      {
        name: 'kolkata',
        population: '39.14M',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
      },
      {
        name: 'delhi',
        population: '20.27M',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
      },
      {
        name: 'bangalore',
        population: '27.47M',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
      }
    ];
    return states;
  }

  getFlightData() {
    let flightResult: Flights[];
    flightResult = [
      {
        flightNo: 'AL-202',
        origin: 'kolkata',
        destination: 'mumbai',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 2300.00
      },
      {
        flightNo: 'AL-206',
        origin: 'kolkata',
        destination: 'mumbai',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 990.00
      },
      {
        flightNo: 'AL-206',
        origin: 'kolkata',
        destination: 'mumbai',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 990.00
      },
      {
        flightNo: 'AL-217',
        origin: 'mumbai',
        destination: 'bangalore',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 850.00
      },
      {
        flightNo: 'AL-333',
        origin: 'bangalore',
        destination: 'mumbai',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 990.00
      },
      {
        flightNo: 'AL-204',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 1000.00
      },
      {
        flightNo: 'AL-102',
        origin: 'delhi',
        destination: 'mumbai',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 1000.00
      },
      {
        flightNo: 'AL-102',
        origin: 'mumbai',
        destination: 'delhi',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 1000.00
      },
      {
        flightNo: 'IN-699',
        origin: 'delhi',
        destination: 'bangalore',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 1600.00
      },
      {
        flightNo: 'IN-699',
        origin: 'bangalore',
        destination: 'delhi',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 1600.00
      },
      {
        flightNo: 'IN-714',
        origin: 'bangalore',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 1950.00
      },
      {
        flightNo: 'IN-704',
        origin: 'bangalore',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 1600.00
      },
      {
        flightNo: 'IN-690',
        origin: 'mumbai',
        destination: 'bangalore',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 1300.00
      },
      {
        flightNo: 'IN-690',
        origin: 'bangalore',
        destination: 'mumbai',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 1599.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 2500.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'amravati',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 1500.50
      },
      {
        flightNo: 'AL-203',
        origin: 'delhi',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 6000.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 5000.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 5300.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 5185.75
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 4545.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 6545.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 3400.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 4300.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 8000.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 5488.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 10000.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 9888.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 7500.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 8500.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 9500.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 6000.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 8500.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 8499.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 3400.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 5900.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 8700.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 9700.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 6800.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 9999.00
      },
      {
        flightNo: 'AL-203',
        origin: 'mumbai',
        destination: 'kolkata',
        time: {
          depart: '2020-11-01 08:00:00',
          arrive: '2020-11-01 10:30:00'
        },
        date: '2020-11-01 01:02:03',
        amount: 6666.00
      }
    ]
    return flightResult;
  }
}
