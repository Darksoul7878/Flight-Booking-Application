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
        city: 'mumbai',
        code: '(BOM)',
        airportName: 'Indira Gandhi International Airport'
      },
      {
        city: 'kolkata',
        code: '(KLT)',
        airportName: 'Netaji Subhas Chandra Bose International Airport'
      },
      {
        city: 'delhi',
        code: '(DHL)',
        airportName: 'Indira Gandhi International Airport'
      },
      {
        city: 'bangalore',
        code: '(BNR)',
        airportName: 'Kempegowda International Airport'
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
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
        fare: {
          availableSeats: 4,
          travelClass: 'Economy',
          amount: 2999
        }
  
      }
    ]
    return flightResult;
  }
}
