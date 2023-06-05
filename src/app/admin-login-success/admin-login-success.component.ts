import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-success',
  templateUrl: './admin-login-success.component.html',
  styleUrls: ['./admin-login-success.component.css']
})
export class AdminLoginSuccessComponent implements OnInit {
  title = "Trip Scheduling App"

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoTrip(){
    this.router.navigate(['/trips'])

  }
  gotoStation()
  {
    this.router.navigate(['/stations'])
  }

}
