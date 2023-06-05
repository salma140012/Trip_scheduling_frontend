import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{observable, Observable}from 'rxjs'
import { Station } from './station';


@Injectable({
  providedIn: 'root'
})
export class StationService {
private getURL='http://backend-tripscheduling-trip-schedulingg.apps.eu410.prod.nextcle.com/api/tripScheduling/stationR';
private updateURL='http://backend-tripscheduling-trip-schedulingg.apps.eu410.prod.nextcle.com/api/tripScheduling/stationU';
private deleteURL='http://backend-tripscheduling-trip-schedulingg.apps.eu410.prod.nextcle.com/api/tripScheduling/stationD';

  
  constructor(private http:HttpClient) { }
  getStationList():Observable<object>{
    return this.http.get('http://backend-tripscheduling-trip-schedulingg.apps.eu410.prod.nextcle.com/api/tripScheduling/stationR');
  }
  makeStation(station:Station):Observable<Object>{
    return this.http.post('http://backend-tripscheduling-trip-schedulingg.apps.eu410.prod.nextcle.com/api/tripScheduling/stationC',station);
  }
  getStationbyId(id:number):Observable<Station>{
    return this.http.get<Station>(`${this.getURL}/${id}`);
  }
  updateStation(id:number,station:Station):Observable<Object>{
    return this.http.put(`${this.updateURL}/${id}`,station);
  }
  DeleteStation(id:number):Observable<Object>{
    return this.http.delete(`${this.deleteURL}/${id}`);
  }
}
