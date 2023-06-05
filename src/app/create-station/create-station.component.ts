import { Component, OnInit } from '@angular/core';
import { StationService } from '../station.service';
import { Station } from '../station';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-station',
  templateUrl: './create-station.component.html',
  styleUrls: ['./create-station.component.css']
})
export class CreateStationComponent implements OnInit {

  station: Station = new Station();
  constructor(private stationService:StationService,private router:Router) { }
  ngOnInit(): void {

  }
  AddStation(){
    this.stationService.makeStation(this.station).subscribe(data =>{
      console.log(data);

    },
    error =>console.log(error));

  }
 
  
  
   
  onSubmit(){
    console.log(this.station);
    this.AddStation();
  }
  
}
