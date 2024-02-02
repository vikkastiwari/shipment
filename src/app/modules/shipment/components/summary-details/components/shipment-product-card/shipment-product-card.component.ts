import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment-product-card',
  templateUrl: './shipment-product-card.component.html',
  styleUrls: ['./shipment-product-card.component.scss']
})
export class ShipmentProductCardComponent implements OnInit {

  @Input() shipmentProductDetail:any;
  @Input() const:any;

  constructor() { }

  ngOnInit(): void {
  }

}
