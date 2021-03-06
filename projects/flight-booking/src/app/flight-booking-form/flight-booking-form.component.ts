import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl, Validators } from  '@angular/forms';
import { State, FlightAC } from '@shared/models';
import { MockDataService, LocalstorageService } from "@shared/services";
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-booking-form',
  templateUrl: './flight-booking-form.component.html',
  styleUrls: ['./flight-booking-form.component.scss']
})
export class FlightBookingFormComponent implements OnInit {

  flightBookingForm: FormGroup;
  states: State[];
  titleAlert: string = 'This field is required';
  filtereDepartureCity: Observable<State[]>;
  filtereDestinationCity: Observable<State[]>;

  flightAC: FlightAC[];
  newflightAC:FlightAC[];

  recentFormValues: any;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: MockDataService,
    private router: Router,
    private localstorageService: LocalstorageService
  ) { 
    this.createflightBookingForm();
    this.filtereDepartureCity = this.flightBookingForm.controls.departureCity.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filtereDepartureCity(state) : this.states.slice())
      );
    this.filtereDestinationCity = this.flightBookingForm.controls.destinationCity.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filtereDestinationCity(state) : this.states.slice())
      );
  }

  createflightBookingForm(){
    this.flightBookingForm = this.formBuilder.group({
      departureCity: ['', Validators.required],  
      destinationCity: [''],
      departureDate: ['', Validators.required],
      returnDate: [''],
      traveler: ['', Validators.required],
      travelClass: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.states = this.dataService.getCitydata();
    this.dataService.castflightAC.subscribe(flightAC => this.flightAC = flightAC);

    this.recentFormValues = this.localstorageService.get("flightData");
    if(this.recentFormValues) {
      this.setFormData();
    }
  }
  
  setFormData() {
    this.flightBookingForm.setValue({
      departureCity: this.recentFormValues.departureCity,  
      destinationCity: this.recentFormValues.destinationCity,
      departureDate:  this.recentFormValues.departureDate,
      returnDate:  this.recentFormValues.returnDate,
      traveler:  this.recentFormValues.traveler,
      travelClass:  this.recentFormValues.travelClass
    })
  }

  private _filtereDepartureCity(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.city.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filtereDestinationCity(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.city.toLowerCase().indexOf(filterValue) === 0);
  }

  onSubmit(post: any) {
    console.log('form data', post);
    this.newflightAC = post;
    this.localstorageService.set('flightData', post);
    this.dataService.ediFlightAC(this.newflightAC);
    this.router.navigate([`/flight-search-result`]);
  }

}
