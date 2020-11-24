import { Component, OnInit } from '@angular/core';
import { HtfServiceService } from '../Services/htf-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

  constructor(private svc: HtfServiceService) { }

  Login()
  {
    this.svc.GetToken().subscribe((jwt) =>
    {
      console.log(jwt);
    });
  }

  GetDataCenters()
  {
    this.svc.GetDataCenters().subscribe((res) =>
    {
      console.log(res);
    });
  }

  ngOnInit(): void
  {
  }

}
