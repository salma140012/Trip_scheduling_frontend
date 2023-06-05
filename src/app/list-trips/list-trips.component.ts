import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-trips',
  templateUrl: './list-trips.component.html',
  styleUrls: ['./list-trips.component.css']
})

export class ListTripsComponent implements OnInit {
  trips: any;

  constructor(private tripService:TripService,private route:Router) { }

  ngOnInit(): void {
   this.getList();
  
  
  }

  private getList(){
    this.tripService.listAllTrips().subscribe(data => {
      this.trips=data;
    })
  }

  updateTrip(id:number){
this.route.navigate(['update-trip',id]);
  }
  deleteTrip(id:number){
    this.tripService.deleteTrip(id).subscribe(data=>{
      console.log(data);
      
    })
}
}
