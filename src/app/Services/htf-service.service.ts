import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HtfServiceService
{

  username: string = "zinderlabs5";
  password: string = "Rv4Bn6b4";
  apiURL: string = "https://htf2020.zinderlabs.com";

  token: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9odGYyMDIwLnppbmRlcmxhYnMuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjA2MjE1MDM2LCJleHAiOjE2MDYzOTUwMzYsIm5iZiI6MTYwNjIxNTAzNiwianRpIjoiYW1XbGpmRmJFUWpSelhPMyIsInN1YiI6NSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.YaG6g5EVDmlK4Kdh511adRWyil10EylY0F0_gOWAQ30";
  Auth: any;

  constructor(private http: HttpClient) { }

  GetToken()
  {
    var options = {
      "username": this.username,
      "password": this.password
    };
    return this.http.post(`${ this.apiURL }/api/auth/login`, options);
  }

  GetDataCenters()
  {

    this.Auth = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(`${ this.apiURL }/api/datacenters`, this.Auth);

  }

  GetErrorById(id)
  {

    this.Auth = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(`${ this.apiURL }/api/datacenters/${ id }/errors?page=2`, this.Auth);

  }

}
