import { Component, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { stringify } from 'querystring';
import { LocalStorageManager } from '../LocalStorage/LocalStorageManager';
import { HtfServiceService } from '../Services/htf-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

  constructor(private svc: HtfServiceService) { }

  Loggedin = false;
  onSubmit(event)
  {
    this.svc.LoginToken(event).subscribe((data) =>
    {
      //@ts-ignore
      LocalStorageManager.SetJWT(data.access_token);
      location.reload();
    });

  }
  ngOnInit(): void
  {
    if (LocalStorageManager.GetJWT() != "") {
      this.Loggedin = true;
      console.log(LocalStorageManager.GetJWT());

    }
    else {
      console.log(LocalStorageManager.GetJWT());
      this.Loggedin = false;
    }
  }

}
