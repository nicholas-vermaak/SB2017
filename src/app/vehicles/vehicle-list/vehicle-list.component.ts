import { Component, OnInit } from "@angular/core";
import { VehicleService } from "../../shared/vehicle.service";
import { Vehicle } from "../../shared/vehicle.model";
import { Response } from "@angular/http";

@Component({
  selector: "app-vehicle-list",
  templateUrl: "./vehicle-list.component.html",
  styleUrls: ["./vehicle-list.component.css"]
})
export class VehicleListComponent implements OnInit {
  vehicleList: Vehicle[];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {

    // todo: Refactor mapping to service
    const fireBaseList = this.vehicleService.getVehicles();
    fireBaseList.snapshotChanges().subscribe(
      item => {
        this.vehicleList = [];
        item.forEach(element => {
          const y = element.payload.toJSON();
          y["$key"] = element.key;
          this.vehicleList.push(y as Vehicle);
        });
      },
      err => console.log(err)
    );
  }

  onVehicleSelected(vehicle: Vehicle) {
    console.log(vehicle);
    this.vehicleService.selectedVehicle = Object.assign({}, vehicle);
    this.vehicleService.showManageModal.emit(true);
  }
}
