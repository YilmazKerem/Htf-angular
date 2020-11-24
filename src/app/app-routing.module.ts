import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorsComponent } from './isolate/errors/errors.component';
import { LoginComponent } from './login/login.component';
import { DatagridComponent } from './Visualise/datagrid/datagrid.component';
import { MapComponent } from './Visualise/map/map.component';
import { ErrorsListComponent } from './Visualise/errors-list/errors-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'datagrid', component: DatagridComponent },
  { path: 'map', component: MapComponent },
  { path: 'errors', component: ErrorsComponent },
  { path: 'errors-list', component: ErrorsListComponent },
  { path: 'nav', component: NavBarComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{
}
