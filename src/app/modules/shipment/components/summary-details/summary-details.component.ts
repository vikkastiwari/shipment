import { Component, OnInit } from '@angular/core';

import Const from 'src/assets/i18n/en.json';
import ShipmentDetails from 'src/assets/shipment-details.json';

@Component({
  selector: 'app-summary-details',
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.scss']
})
export class SummaryDetailsComponent implements OnInit {

  const = Const.shipment;
  currentRoute:string = '';
  shipmentDetails = ShipmentDetails;

  constructor() { }

  ngOnInit(): void {
  }
}
