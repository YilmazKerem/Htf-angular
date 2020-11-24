import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { DatagridComponent } from './Visualise/datagrid/datagrid.component';
import { MapComponent } from './Visualise/map/map.component';
import { ErrorsComponent } from './isolate/errors/errors.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatagridComponent,
    MapComponent,
    ErrorsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
