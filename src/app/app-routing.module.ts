import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelLogsComponent } from './fuel-logs/fuel-logs.component';
import { VehiclesComponent } from './vehicles/vehicles.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehiclesComponent },



];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
