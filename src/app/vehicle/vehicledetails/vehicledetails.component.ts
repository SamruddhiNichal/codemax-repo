import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent implements OnInit {
  vehicle;

  constructor(private router: Router) {
    this.vehicle = this.router.getCurrentNavigation().extras.state
  }

  ngOnInit(): void {
  }

}
