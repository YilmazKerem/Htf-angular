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
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorsListComponent } from './Visualise/errors-list/errors-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatagridComponent,
    MapComponent,
    ErrorsComponent,
    ErrorsListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
