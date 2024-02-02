import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment-details-card',
  templateUrl: './shipment-details-card.component.html',
  styleUrls: ['./shipment-details-card.component.scss']
})
export class ShipmentDetailsCardComponent implements OnInit {
  
  @Input() shipmentDetails!:any;
  @Input() const!:any;
  showMoreInfo:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleInfo() {
    this.showMoreInfo = !this.showMoreInfo;
  }
}
