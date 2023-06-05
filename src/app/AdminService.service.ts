import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import {HttpClient, HttpHeaders} from '@angular/common/http';

headers: new HttpHeaders({
  //'Content-Type':  'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Origin': '*'
})

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor(private _http: HttpClient ) { }
  
  public loginAdminFromRemote(admin :Admin):Observable<object>{
    
   return this._http.post<Admin>('http://localhost:8080/api/tripScheduling/signIn',admin);
    
  }
  public signupAdminFromRemote(admin :Admin):Observable<any>
  {
    
   return this._http.post<any>('http://localhost:8080/api/tripScheduling/signUp',admin);
  }
}
