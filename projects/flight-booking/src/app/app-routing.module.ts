import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routing components import statements
import { 
  FlightsComponent, 
  HotelsComponent, 
  CarsComponent, 
  BusesComponent, 
  ActivityComponent 
} from '@shared/components';

import { FlightBookingFormComponent } from './flight-booking-form/flight-booking-form.component';
import { FlightSearchResultComponent } from './flight-search-result/flight-search-result.component';

const routes: Routes = [
    { path: '', redirectTo: 'flights', pathMatch: 'full' },
    { path: 'flights', component: FlightsComponent, data: { label: 'Flights' } },
    { path: 'hotels', component: HotelsComponent, data: { label: 'Hotels' } },
    { path: 'cars', component: CarsComponent, data: { label: 'Cars' } },
    { path: 'buses', component: BusesComponent, data: { label: 'buses' } },
    { path: 'activity', component: ActivityComponent, data: { label: 'activity' } },
    { path: 'flight-booking', component: FlightBookingFormComponent},
    { path: 'flight-search-result', component: FlightSearchResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingComponents = [
  FlightsComponent,
  HotelsComponent,
  CarsComponent,
  BusesComponent,
  ActivityComponent,
  FlightBookingFormComponent,
  FlightSearchResultComponent
]
