import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit
{

  constructor() { }

  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit()
  {
    this.items = [
      { label: 'login', icon: 'pi pi-fw pi-home', routerLink: "/login" },
      { label: 'datagrid', icon: 'pi pi-fw pi-calendar', routerLink: "/datagrid" },
      { label: 'map', icon: 'pi pi-fw pi-map', routerLink: "/map" },
      { label: 'error', icon: 'pi pi-fw pi-map', routerLink: "/errors" },
    ];

    this.activeItem = this.items[0];
  }
  //   <ul>
  //   <li><a routerLink="/login" routerLinkActive="active">login</a></li>
  //   <li><a routerLink="/datagrid" routerLinkActive="active">datagrid</a></li>
  //   <li><a routerLink="/map" routerLinkActive="active">Map</a></li>
  //   <li><a routerLink="/errors" routerLinkActive="active">errors</a></li>
  //   <li><a routerLink="/nav" routerLinkActive="active">nav</a></li>
  // </ul>
}
