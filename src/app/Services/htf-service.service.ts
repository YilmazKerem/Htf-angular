import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageManager } from '../LocalStorage/LocalStorageManager';



@Injectable({
  providedIn: 'root'
})
export class HtfServiceService
{

  username: string = "zinderlabs5";
  password: string = "Rv4Bn6b4";
  apiURL: string = "https://htf2020.zinderlabs.com";

  token: string = "";
  Auth: any;

  constructor(private http: HttpClient)
  {
    this.token = LocalStorageManager.GetJWT();
  }

  GetToken()
  {
    var options = {
      "username": this.username,
      "password": this.password
    };
    return this.http.post(`${ this.apiURL }/api/auth/login`, options);
  }

  LoginToken(data)
  {
    return this.http.post(`${ this.apiURL }/api/auth/login`, data);
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
    return this.http.get(`${ this.apiURL }/api/datacenters/${ id }/errors?page=2`, this.Auth).toPromise();

  }

  GetErrorById2(id, page: number)
  {

    this.Auth = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(`${ this.apiURL }/api/datacenters/${ id }/errors?page=${ page }`, this.Auth);

  }

  SetIsolation(id)
  {

    console.log(id);
    console.log(this.token);

    this.Auth = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${ this.apiURL }/api/datacenters/${ id }/isolate`, "", this.Auth);

  }
}
