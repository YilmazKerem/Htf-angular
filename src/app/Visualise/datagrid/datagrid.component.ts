import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { HtfServiceService } from 'src/app/Services/htf-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit
{

  constructor(private svc: HtfServiceService, private router: Router) { }

  data: any;
  sortedData = [];

  GetDataCenters()
  {
    this.svc.GetDataCenters().subscribe((res) =>
    {
      console.log(res);

      //@ts-ignore
      this.data = res.data;
      //@ts-ignore
    });
  }

  GoToErrorList(id: number)
  {

    let para: NavigationExtras =
    {
      queryParams:
      {
        id: id,
      }
    };

    this.router.navigate(['errors-list'], para);
  }

  ngOnInit(): void
  {
    this.GetDataCenters();
  }

}




