import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightModel } from './../../../../../libs/shared/src/lib/shared';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchServiceService {
  private REST_API_SERVER = 'http://nmflightapi.azurewebsites.net';
  public flightModels: FlightModel[];

  constructor(private http: HttpClient) {}

  public submitSearch(departure, arrival, dDate, rDate) {
    let data = {
      DepartureAirportCode: departure,
      ArrivalAirportCode: arrival,
      DepartureDate: dDate,
      ReturnDate: rDate
    };
    this.http
      .get<any>(this.REST_API_SERVER + '/api/flight', { params: data })
      .subscribe(t => (this.flightModels = t));
    return this.flightModels;
  }
}
