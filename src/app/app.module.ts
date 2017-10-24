import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FuelLogsComponent } from './fuel-logs/fuel-logs.component';
import { FuelLogListComponent } from './fuel-logs/fuel-log-list/fuel-log-list.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { ModalModule, AlertModule } from 'ngx-bootstrap';

import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleEditComponent } from './vehicles/vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { VehicleListItemComponent } from './vehicles/vehicle-list/vehicle-list-item/vehicle-list-item.component';
import { environment } from '../environments/environment';
import { VehicleService } from './shared/vehicle.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FuelLogsComponent,
    FuelLogListComponent,
    VehiclesComponent,
    VehicleEditComponent,
    VehicleListComponent,
    VehicleListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
