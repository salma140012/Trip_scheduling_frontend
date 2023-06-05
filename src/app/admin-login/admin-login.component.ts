import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
       admin= new Admin();
       msg="";

  constructor(private _Service: AdminService,private _router:Router) { }

  ngOnInit(): void {
  }
  SignInAdmin()
  {
  
    this._Service.loginAdminFromRemote(this.admin).subscribe
    (data=>
      {alert("Login Successfully");
      this._router.navigate(['/adminloginsuccess']);
    },error=>
    {alert("Login failed");
  this.msg= "Bad credntials, Please enter valid username and password";
});
    
    
 
  }
  NewAccount()
  {
    this._router.navigate(['/adminsignup']);
  }
  

}
