import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HtfServiceService {

  username: string = "zinderlabs5";
  password: string = "Rv4Bn6b4";
  apiURL: string = "https://htf2020.zinderlabs.com";
  

  constructor(private http: HttpClient) { }

  GetToken(){
    // return this.http.post()
  }


}
