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
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing', component: LandingComponent,
    children: [
      { path: '', redirectTo: 'flights', pathMatch: 'full' },
      { path: 'flights', component: FlightsComponent },
      { path: 'hotels', component: HotelsComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'buses', component: BusesComponent },
      { path: 'activity', component: ActivityComponent },
    ]
  },
  { path: 'flight-booking', component: FlightBookingFormComponent },
  { path: 'flight-search-result', component: FlightSearchResultComponent },
  { path: '**', redirectTo: 'flights' }
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
  FlightSearchResultComponent,
  LandingComponent
]
