import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-header',
  templateUrl: './vehicle-header.component.html',
  styleUrls: ['./vehicle-header.component.css'],
})
export class VehicleHeaderComponent implements OnInit {
  search: string;
  vehicleArray;
  wishlist = [];
  selected: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.vehicleArray = this.vehicles;
  }

  vehicles = [
    {
      id: 1,
      typeOfVehicle: 'Sports Car',
      YearOfManufactured: 2023,
      price: 5000000,
      isWishListed: false,
      insurance: [
        { company: 'Bajaj', insPrice: 200000, discount: 10 },
        { company: 'Mahindra', insPrice: 100000, discount: 15 },
        { company: 'Tata', insPrice: 150000, discount: 20 },
        { company: 'Hdfc', insPrice: 50000, discount: 13 },
      ],
    },
    {
      id: 2,
      typeOfVehicle: 'Taxi',
      YearOfManufactured: 2022,
      price: 800000,
      isWishListed: false,
      insurance: [
        { company: 'Royal Sudaram', insPrice: 200000, discount: 20 },
        { company: 'IFFCO', insPrice: 100000, discount: 8 },
        { company: 'ICIC', insPrice: 400000, discount: 17 },
        { company: 'hdfc', insPrice: 800000, discount: 8 },
      ],
    },
    {
      id: 3,
      typeOfVehicle: 'Off-Road Vehicle',
      YearOfManufactured: 2019,
      price: 7000000,
      isWishListed: false,
      insurance: [
        { company: 'bajaj', insPrice: 800000, discount: 5 },
        { company: 'mahindra', insPrice: 900000, discount: 16 },
        { company: 'tata', insPrice: 700000, discount: 10 },
        { company: 'hdfc', insPrice: 700000, discount: 15 },
      ],
    },
    {
      id: 4,
      typeOfVehicle: 'Minibus',
      YearOfManufactured: 2018,
      price: 400000,
      isWishListed: false,
      insurance: [
        { company: 'Bharti axa', insPrice: 200000, discount: 20 },
        { company: 'Acko', insPrice: 90000, discount: 10 },
        { company: 'Godigit', insPrice: 280000, discount: 7 },
        { company: 'National Insurance', insPrice: 100000, discount: 8 },
      ],
    },
  ];

  AddToWishlist(vehicle) {
    vehicle.isWishListed = !vehicle.isWishListed;
    if (vehicle.isWishListed) {
      this.wishlist.push(vehicle);
    } else {
      const objIndex = this.wishlist.findIndex((obj) => obj.id === vehicle.id);
      if (objIndex > -1) {
        this.wishlist.splice(objIndex, 1);
      }
    }
  }

  filterVehicle() {
    this.vehicleArray = this.vehicles.filter((eve) => {
      if (eve.typeOfVehicle.startsWith(this.search)) {
        return eve;
      } else if (eve.YearOfManufactured.toString().startsWith(this.search)) {
        return eve;
      }
      return null;
    });
  }

  vehicleDetails(vehicle) {
    this.router.navigate(['vehicledetails'], { state: vehicle});
  }
}
