import { Injectable, EventEmitter } from "@angular/core";
import { Vehicle } from "./vehicle.model";
import "rxjs/Observable";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireDatabaseModule
} from "angularfire2/database";
import { Http, Response } from "@angular/http";
import { environment } from "../../environments/environment";

@Injectable()
export class VehicleService {
  vehicleList: AngularFireList<any>;
  selectedVehicle: Vehicle = new Vehicle();
  vehicleUrl: string;
  showManageModal = new EventEmitter<boolean>();


  constructor(private http: Http, private firebase: AngularFireDatabase) {
    this.vehicleUrl =
      environment.fireBaseConfig.databaseURL + "/" + "vehicles.json";
  }

  getVehicles() {
    this.vehicleList = this.firebase.list("vehicles");
    return this.vehicleList;
  }

  insertVehicle(vehicle: Vehicle) {
    this.vehicleList.push({
      name: vehicle.name,
      registrationNum: vehicle.registrationNum
    });
  }

  updateVehicle(vehicle: Vehicle) {
    this.vehicleList.update(vehicle.$key, {
      name: vehicle.name,
      registrationNum: vehicle.registrationNum,
      imgUrl: vehicle.imgUrl,
    });
  }

  deleteVehicle(vehicleKey: string) {
    this.vehicleList.remove(vehicleKey);
  }


  insertVehicleHttp(vehicle: Vehicle) {
    return this.http.post(this.vehicleUrl, {
      name: vehicle.name,
      registrationNum: vehicle.registrationNum,
      imgUrl: vehicle.imgUrl
    });
  }

}
