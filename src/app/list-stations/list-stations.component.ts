import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-list-stations',
  templateUrl: './list-stations.component.html',
  styleUrls: ['./list-stations.component.css']
})
export class ListStationsComponent implements OnInit {

  stations:any;

 
  constructor(private stationService:StationService,private route:Router) { }

  ngOnInit(): void {
    this.getStations();
  }
  private getStations(){
    this.stationService.getStationList().subscribe(data =>{
      this.stations= data;
    });
  }
  updateStation(id:number){
    this.route.navigate(['update-station',id]);
      }
    DeleteStation(id:number){
    this.stationService.DeleteStation(id).subscribe(data=>{
       console.log(data);
          
        })
    }
      

}
