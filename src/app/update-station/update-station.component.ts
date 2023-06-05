import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-update-station',
  templateUrl: './update-station.component.html',
  styleUrls: ['./update-station.component.css']
})
export class UpdateStationComponent implements OnInit {
  station : Station = new Station();
  id:number;
  constructor(private stationService:StationService,
    private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.stationService.getStationbyId(this.id).subscribe(data=>{
      this.station=data;
    },error =>console.log(error));
    
    
  }
  onSubmit(){
    this.stationService.updateStation(this.id,this.station).subscribe(data=>{
    },
    error=>console.log(error));
  }
 
  backToStationList(){
    this.router.navigate(['/stations']);
      }
 

}
