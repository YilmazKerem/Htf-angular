import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HtfServiceService } from 'src/app/Services/htf-service.service';

@Component({
  selector: 'app-errors-list',
  templateUrl: './errors-list.component.html',
  styleUrls: ['./errors-list.component.css']
})
export class ErrorsListComponent implements OnInit
{

  id: number;
  data: any;
  meta: any;

  constructor(private router: Router, private route: ActivatedRoute, private svc: HtfServiceService) { }

  ngOnInit(): void
  {
    this.route.queryParams.subscribe(params =>
    {
      if (params) {
        this.id = params.id;
      }

    });

    this.svc.GetErrorById(this.id).subscribe((res) =>
    {
      // console.log(res);
      //@ts-ignore
      this.data = res.data;
      //@ts-ignore
      this.meta = res.meta.pagination;
      // console.log(this.data);
      console.log(this.meta);

      // this.DatacentreError.push(res.meta);
    });
    console.log(this.id);
    // await this.GetOwner();
    // console.log(this.HuidigeOwner);
  }

}
