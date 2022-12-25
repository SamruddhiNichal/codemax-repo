import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleHeaderComponent } from './vehicle/vehicle-header/vehicle-header.component';
import { VehicledetailsComponent } from './vehicle/vehicledetails/vehicledetails.component';

const routes: Routes = [
  { path: '', component: VehicleHeaderComponent },
  {
    path: 'vehicledetails',
    component: VehicledetailsComponent
  },
  { path: '**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
