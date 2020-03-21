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

const routes: Routes = [
    { path: '', redirectTo: 'flights', pathMatch: 'full' },
    { path: 'flights', component: FlightsComponent, data: { label: 'Flights' } },
    { path: 'hotels', component: HotelsComponent, data: { label: 'Hotels' } },
    { path: 'cars', component: CarsComponent, data: { label: 'Cars' } },
    { path: 'buses', component: BusesComponent, data: { label: 'buses' } },
    { path: 'activity', component: ActivityComponent, data: { label: 'activity' } },
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
  ActivityComponent
]
