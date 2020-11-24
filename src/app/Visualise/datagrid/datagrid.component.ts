import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { HtfServiceService } from 'src/app/Services/htf-service.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit
{

  constructor(private svc: HtfServiceService) { }

  data: any;

  GetDataCenters()
  {
    this.svc.GetDataCenters().subscribe((res) =>
    {
      console.log(res);

      //@ts-ignore
      this.data = res.data;
    });
  }

  ngOnInit(): void
  {
    this.GetDataCenters();
  }

}
