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
  meta = null;
  page: number = 1;

  constructor(private router: Router, private route: ActivatedRoute, private svc: HtfServiceService) { }

  ngOnInit(): void
  {
    this.route.queryParams.subscribe(params =>
    {
      if (params) {
        this.id = params.id;
      }

    });

    this.GetErrors();


    console.log(this.id);
  }

  ChangePage(page: number)
  {
    this.page += page;
    if (this.page > this.meta.total_pages) {
      this.page = this.meta.total_pages;
    }
    if (this.page < 1) {
      this.page = 1;
    }
    this.GetErrors();


  }

  GetErrors()
  {
    this.svc.GetErrorById2(this.id, this.page).subscribe((res) =>
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
  }

  Isolation()
  {

    this.svc.SetIsolation(this.id).subscribe(() => { });
  }

}
