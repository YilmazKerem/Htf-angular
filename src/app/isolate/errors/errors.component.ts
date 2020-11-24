import { Component, OnInit } from '@angular/core';
import { HtfServiceService } from 'src/app/Services/htf-service.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit
{

  constructor(private svc: HtfServiceService) { }

  data;
  DatacentreError = [];
  GetDataCenters()
  {
    this.svc.GetDataCenters().subscribe((res) =>
    {
      //console.log(res);

      //@ts-ignore
      this.data = res.data;
      this.data.forEach(element =>
      {
        console.log(element.id);

        //this.DatacentreError.push(this.svc.GetErrorById(element.id));
        console.log(this.svc.GetErrorById(element.id));


      });
      //console.log(this.DatacentreError);

    });

  }

  ngOnInit(): void
  {
    this.GetDataCenters();
  }

}
