import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentComponent } from './shipment.component';
import { ShipmentRoutingModule } from './shipment-routing.module';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { SummaryDetailsComponent } from './components/summary-details/summary-details.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterStatusPipe } from 'src/app/pipes/filter-status.pipe';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { ShipmentDetailsCardComponent } from './components/summary-details/components/shipment-details-card/shipment-details-card.component';
import { ShipmentProductCardComponent } from './components/summary-details/components/shipment-product-card/shipment-product-card.component';

@NgModule({
  declarations: [
    ShipmentComponent,
    ResultCardComponent,
    SummaryDetailsComponent,
    FilterComponent,
    FilterStatusPipe,
    SearchHeaderComponent,
    ShipmentDetailsCardComponent,
    ShipmentProductCardComponent
  ],
  imports: [
    CommonModule,
    ShipmentRoutingModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShipmentModule { }
