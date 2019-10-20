import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightSearchServiceService } from '../services/flight-search-service.service';
import { FlightModel } from '@enterprise-app/shared';

@Component({
  selector: 'enterprise-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  public searchForm: FormGroup;
  // Form state
  loading = false;
  public flightModel: FlightModel;

  flightModels: FlightModel[];

  constructor(
    private fb: FormBuilder,
    private flightSearchServiceService: FlightSearchServiceService
  ) {
    this.createForm();
  }

  private createForm(): void {
    this.searchForm = this.fb.group({
      departure: ['', [Validators.required]],
      arrival: ['', [Validators.required]],
      dDate: ['', [Validators.required]],
      rDate: ['', [Validators.required]]
    });
  }

  async submitHandler() {
    this.loading = true;
    const form = this.searchForm.value;
    try {
      this.flightModels = this.flightSearchServiceService.submitSearch(
        form.arrival,
        form.departure,
        form.dDate,
        form.rDate
      );
    } catch (err) {
      console.error(err);
    }
    this.loading = false;
  }

  ngOnDestroy() {}
}
