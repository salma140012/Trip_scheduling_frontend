
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './trip';


@Injectable({
  providedIn: 'root'
})
export class TripService {

private getURL='http://backend-tripscheduling-trip-schedulingg.apps.eu410.prod.nextcle.com/api/tripScheduling/tripR';
private updateURL='http://backend-tripscheduling-trip-schedulingg.apps.eu410.prod.nextcle.com/api/tripScheduling/tripU';
private deleteURL='http://backend-tripscheduling-trip-schedulingg.apps.eu410.prod.nextcle.com//api/tripScheduling/tripD';

  constructor(private http: HttpClient) { }

  listAllTrips(): Observable<object>{
    return this.http.get('http://backend-tripscheduling-trip-schedulingg.apps.eu410.prod.nextcle.com/api/tripScheduling/tripR');
  }

  makeTrip(trip:Trip):Observable<Object>{
    return this.http.post('http://backend-tripscheduling-trip-schedulingg.apps.eu410.prod.nextcle.com/api/tripScheduling/tripC',trip);
  }

  getTripbyId(id:number):Observable<Trip>{
    return this.http.get<Trip>(`${this.getURL}/${id}`);
  }

  updateTrip(id:number,trip:Trip):Observable<Object>{
    return this.http.put(`${this.updateURL}/${id}`,trip);
  }

  deleteTrip(id:number):Observable<Object>{
    return this.http.delete(`${this.deleteURL}/${id}`);
  }
}
