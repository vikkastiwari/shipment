import { SummaryDetailsComponent } from './components/summary-details/summary-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShipmentComponent } from './shipment.component';

const routes: Routes = [
  {
    path:'',component: ShipmentComponent,
  },
  {
    path:':id', component: SummaryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }
