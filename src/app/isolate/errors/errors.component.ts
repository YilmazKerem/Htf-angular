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

  data = null;
  DatacentreError = [];
  GetDataCenters()
  {
    this.svc.GetDataCenters().subscribe((res) =>
    {

      //@ts-ignore
      console.log('xxx', res.data);

      //@ts-ignore
      this.data = res.data;
      this.data.forEach(async element =>
      {

        //this.DatacentreError.push(this.svc.GetErrorById(element.id));
        //console.log(this.svc.GetErrorById(element.id));
        await this.svc.GetErrorById(element.id).then(async (res) =>
        {
          //@ts-ignore
          this.DatacentreError.push(res.meta);
          //@ts-ignore
          console.log(res.meta);

        });
        setTimeout(() => { }, 10);

      });
    });
    console.log(this.DatacentreError);

  }

  ngOnInit(): void
  {
    //this.GetDataCenters();
  }


  SetIsolation(index)
  {
    this.svc.SetIsolation(index).subscribe();
  }
}
