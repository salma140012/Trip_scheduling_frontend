import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Trip } from '../trip';
import { TripService } from '../trip.service';
@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {
  trip : Trip = new Trip();
  id:number;
  constructor(private tripService:TripService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.tripService.getTripbyId(this.id).subscribe(data=>{
      this.trip=data;
    },error =>console.log(error));
  }

  
  onSubmit(){
    this.tripService.updateTrip(this.id,this.trip).subscribe(data=>{
    
    },
    error=>console.log(error));
  }
 
  backToTripList(){
    this.router.navigate(['trips']);
      }
}


