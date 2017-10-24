import { Component, OnInit, TemplateRef } from '@angular/core';
import { VehicleService } from '../shared/vehicle.service';
import { Vehicle } from '../shared/vehicle.model';
import {VehicleEditComponent} from './vehicle-edit/vehicle-edit.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';



@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  providers: [VehicleService]
})
export class VehiclesComponent implements OnInit {
  public modalRef: BsModalRef;
  shouldDisplayMessage = false;

  constructor(private vehicleService: VehicleService, private modalService: BsModalService) {}

  ngOnInit() {

    this.vehicleService.showManageModal.subscribe((display: boolean) => this.shouldDisplayMessage = display);

  }

  public addNewScooter() {

    this.shouldDisplayMessage = true;

  }
}
