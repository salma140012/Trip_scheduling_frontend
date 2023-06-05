import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTripsComponent } from './list-trips/list-trips.component';
import { NgModule } from '@angular/core';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { ListStationsComponent } from './list-stations/list-stations.component';
import { CreateStationComponent } from './create-station/create-station.component';
import { UpdateStationComponent } from './update-station/update-station.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLoginSuccessComponent } from './admin-login-success/admin-login-success.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTripsComponent,
    CreateTripComponent,
    UpdateTripComponent,
    ListStationsComponent,
    CreateStationComponent,
    UpdateStationComponent,
    AdminLoginComponent,
    AdminLoginSuccessComponent,
    AdminSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
