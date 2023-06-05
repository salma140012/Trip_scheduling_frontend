import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStationComponent } from './create-station/create-station.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ListStationsComponent } from './list-stations/list-stations.component';
import { ListTripsComponent } from './list-trips/list-trips.component';
import { UpdateStationComponent } from './update-station/update-station.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { AdminLoginSuccessComponent } from './admin-login-success/admin-login-success.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';


const routes: Routes = [
  {path:'',component:AdminLoginComponent},
  {path:'adminloginsuccess',component:AdminLoginSuccessComponent},
  {path:"", redirectTo:"adminloginsuccess",pathMatch:'full'},
  {path:'adminsignup',component: AdminSignUpComponent},
  {path:"", redirectTo:"adminsignup",pathMatch:'full'},
  {path:'adminlogin',component: AdminLoginComponent},
  {path:"", redirectTo:"adminlogin",pathMatch:'full'},
  //{path:'',redirectTo:'home-page',pathMatch:'full'},
  {path: 'trips',component: ListTripsComponent},
  {path:'create-trip',component:CreateTripComponent},
  {path:'update-trip/:id',component:UpdateTripComponent},
  {path: 'stations',component:ListStationsComponent},
  {path:'create-station',component:CreateStationComponent},
  {path:'update-station/:id',component:UpdateStationComponent}
];










@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
