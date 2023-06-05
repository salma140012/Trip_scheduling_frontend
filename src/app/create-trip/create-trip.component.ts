import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { FormsModule } from '@angular/forms';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
  trip : Trip = new Trip();
  constructor(private tripService:TripService,private router:Router) { }

  ngOnInit(): void {
  }

  AddTrip(){
    this.tripService.makeTrip(this.trip).subscribe(data =>{
      console.log(data);
    },
    error =>console.log(error));
  }
   
  onSubmit(){
    console.log(this.trip);
    this.AddTrip();
  }
  backToTripList(){
    this.router.navigate(['trips']);
      }
}
