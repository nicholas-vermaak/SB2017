import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Response } from "@angular/http";

import { VehicleService } from "../../shared/vehicle.service";
import { Vehicle } from "../../shared/vehicle.model";

@Component({
  selector: "app-vehicle-edit",
  templateUrl: "./vehicle-edit.component.html",
  styleUrls: ["./vehicle-edit.component.css"]
})
export class VehicleEditComponent implements OnInit {
  ngForm: any;

  constructor( public vehicleService: VehicleService) {}

  ngOnInit() {
   // this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value.$key == null) {
      this.vehicleService.insertVehicleHttp(form.value as Vehicle).subscribe(
        (response: Response) => {
          console.log(response.json);
        },
        (error: Response) => console.log(error.json)
      );
    } else {
      this.vehicleService.updateVehicle(form.value as Vehicle);
    }

    this.resetForm(form);
  }

  onDelete(form: NgForm) {
    if (confirm("Are you sure you want to delete this vehicle?") === true) {
      this.vehicleService.deleteVehicle(form.value.$key);

      this.resetForm(form);
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset(form);
    }
    this.vehicleService.selectedVehicle = {
      $key: null,
      name: "",
      registrationNum: "",
      imgUrl: ""
    };

    this.vehicleService.showManageModal.emit(false);
  }
}
